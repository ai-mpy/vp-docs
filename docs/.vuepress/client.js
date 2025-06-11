import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // 只在浏览器环境执行
    if (typeof window !== 'undefined') {
      // 页面加载完成后执行
      router.afterEach(() => {
        // 等待DOM渲染完成
        setTimeout(() => {
          // 为所有h2标题添加折叠功能
          const h2Elements = document.querySelectorAll('.theme-default-content h2');
          
          h2Elements.forEach(h2 => {
            // 已经处理过的标题不再处理
            if (h2.classList.contains('collapsible-processed')) return;
            
            // 标记为已处理
            h2.classList.add('collapsible-processed');
            
            // 添加折叠/展开图标
            const toggleIcon = document.createElement('span');
            toggleIcon.className = 'toggle-icon';
            toggleIcon.innerHTML = '▼';
            toggleIcon.style.cursor = 'pointer';
            toggleIcon.style.fontSize = '0.8em';
            toggleIcon.style.marginLeft = '10px';
            h2.appendChild(toggleIcon);
            
            // 获取该标题后面的所有元素，直到下一个h2
            let currentElement = h2.nextElementSibling;
            const contentElements = [];
            
            while (currentElement && !currentElement.matches('h2')) {
              contentElements.push(currentElement);
              currentElement = currentElement.nextElementSibling;
            }
            
            // 创建一个包装器来容纳内容
            const contentWrapper = document.createElement('div');
            contentWrapper.className = 'section-content';
            contentWrapper.style.transition = 'max-height 0.3s ease-out';
            contentWrapper.style.overflow = 'hidden';
            
            // 将内容移动到包装器中
            contentElements.forEach(el => {
              const clone = el.cloneNode(true);
              contentWrapper.appendChild(clone);
              el.style.display = 'none'; // 隐藏原始元素
            });
            
            // 将包装器插入到h2之后
            h2.parentNode.insertBefore(contentWrapper, h2.nextSibling);
            
            // 点击标题时切换内容的显示/隐藏
            h2.addEventListener('click', (e) => {
              // 阻止事件冒泡
              e.stopPropagation();
              
              const isCollapsed = h2.getAttribute('data-collapsed') === 'true';
              
              if (isCollapsed) {
                // 展开内容
                contentWrapper.style.maxHeight = contentWrapper.scrollHeight + 'px';
                setTimeout(() => {
                  contentWrapper.style.maxHeight = 'none'; // 允许内容自然扩展
                }, 300);
                toggleIcon.innerHTML = '▼';
                h2.setAttribute('data-collapsed', 'false');
              } else {
                // 折叠内容
                contentWrapper.style.maxHeight = contentWrapper.scrollHeight + 'px';
                setTimeout(() => {
                  contentWrapper.style.maxHeight = '0';
                }, 10); // 短暂延迟以确保过渡生效
                toggleIcon.innerHTML = '▶';
                h2.setAttribute('data-collapsed', 'true');
              }
            });
            
            // 默认展开
            h2.setAttribute('data-collapsed', 'false');
            contentWrapper.style.maxHeight = 'none';
          });
        }, 300);
      });
    }
  },
}) 