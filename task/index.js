const tabs = document.querySelectorAll('details');

    tabs.forEach((tab) => {
      tab.addEventListener('toggle', () => {
        if (tab.open) {
          tabs.forEach((otherTab) => {
            if (otherTab !== tab) otherTab.open = false;
          });
        }
      });
    });