const tabGroups = document.querySelectorAll('.tab-group');

tabGroups.forEach(group => {
  const tabs = group.querySelectorAll('.tab-btn, .filter-btn');
  const contents = group.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      if (!target) return;

      // Toggle active state for tab buttons inside this group
      tabs.forEach(t => t.classList.toggle('active', t === tab));

      contents.forEach(content => {
        const isMatch = content.dataset.tabContent === target;
        
        if (isMatch) {
          content.style.display = 'block';
          content.style.opacity = '0';
          content.style.transform = 'translateY(10px)';
          
          // Trigger reflow
          content.offsetHeight;
          
          requestAnimationFrame(() => {
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
          });
        } else {
          content.style.display = 'none';
        }
      });
    });
  });
});
