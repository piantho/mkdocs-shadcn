(function () {
  const STORAGE_KEY = 'theme';
  const root = document.documentElement;
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  if (savedTheme) {
    root.classList.toggle('dark', savedTheme === 'dark');
  }

  const sidebar = document.querySelector('[data-sidebar]');
  const backdrop = document.querySelector('[data-sidebar-backdrop]');
  const toggleButtons = document.querySelectorAll('[data-sidebar-toggle]');
  const closeButtons = document.querySelectorAll('[data-sidebar-close]');
  const desktopQuery = window.matchMedia('(min-width: 768px)');

  const setToggleExpanded = (value) => {
    toggleButtons.forEach((btn) => btn.setAttribute('aria-expanded', value));
  };

  const showBackdrop = () => {
    if (!backdrop) {
      return;
    }
    backdrop.classList.add('is-visible');
  };

  const hideBackdrop = () => {
    if (!backdrop) {
      return;
    }
    backdrop.classList.remove('is-visible');
  };

  const openSidebar = () => {
    if (!sidebar || desktopQuery.matches) {
      return;
    }
    sidebar.classList.add('sidebar-open');
    sidebar.classList.remove('-translate-x-full');
    sidebar.setAttribute('data-state', 'open');
    setToggleExpanded('true');
    showBackdrop();
    document.body.style.overflow = 'hidden';
  };

  const closeSidebar = () => {
    if (!sidebar || desktopQuery.matches) {
      return;
    }
    sidebar.classList.remove('sidebar-open');
    sidebar.classList.add('-translate-x-full');
    sidebar.setAttribute('data-state', 'closed');
    setToggleExpanded('false');
    hideBackdrop();
    document.body.style.overflow = '';
  };

  const syncSidebar = () => {
    if (!sidebar) {
      return;
    }
    if (desktopQuery.matches) {
      sidebar.classList.add('sidebar-open');
      sidebar.classList.remove('-translate-x-full');
      sidebar.setAttribute('data-state', 'open');
      setToggleExpanded('false');
      hideBackdrop();
      document.body.style.overflow = '';
    } else {
      sidebar.classList.remove('sidebar-open');
      sidebar.classList.add('-translate-x-full');
      sidebar.setAttribute('data-state', 'closed');
      setToggleExpanded('false');
      hideBackdrop();
      document.body.style.overflow = '';
    }
  };

  syncSidebar();
  desktopQuery.addEventListener('change', syncSidebar);

  toggleButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const isOpen = sidebar && sidebar.getAttribute('data-state') === 'open';
      if (isOpen) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      closeSidebar();
    });
  });

  if (backdrop) {
    backdrop.addEventListener('click', closeSidebar);
  }

  const commandPalette = document.querySelector('[data-command-palette]');
  const commandPaletteInput = document.querySelector('[data-command-palette-input]');
  const commandPaletteList = document.querySelector('[data-command-palette-list]');
  const helpOverlay = document.querySelector('[data-help-overlay]');
  const searchInputs = Array.from(document.querySelectorAll('[data-search-input]'));
  const primarySearchInput = document.getElementById('search-input') || searchInputs[0] || null;

  searchInputs.forEach((input) => {
    const form = input.closest('form');
    if (!form) {
      return;
    }
    form.addEventListener('submit', (event) => {
      if (!input.value.trim()) {
        event.preventDefault();
      }
    });
  });

  const focusSearchInput = () => {
    const target = primarySearchInput || searchInputs[0];
    if (target) {
      target.focus();
    }
  };

  const openCommandPalette = () => {
    if (!commandPalette) return;
    commandPalette.classList.add('is-open');
    if (commandPaletteInput) {
      setTimeout(() => commandPaletteInput.focus(), 100);
    }
  };

  const closeCommandPalette = () => {
    if (!commandPalette) return;
    commandPalette.classList.remove('is-open');
    if (commandPaletteInput) {
      commandPaletteInput.value = '';
    }
    filterCommandItems('');
  };

  const openHelpOverlay = () => {
    if (!helpOverlay) return;
    helpOverlay.classList.add('is-open');
  };

  const closeHelpOverlay = () => {
    if (!helpOverlay) return;
    helpOverlay.classList.remove('is-open');
  };

  const toggleTheme = () => {
    const nextTheme = root.classList.toggle('dark') ? 'dark' : 'light';
    localStorage.setItem(STORAGE_KEY, nextTheme);
  };

  const filterCommandItems = (query) => {
    if (!commandPaletteList) return;
    const items = commandPaletteList.querySelectorAll('[data-command-item]');
    const lowerQuery = query.toLowerCase();
    
    items.forEach((item) => {
      const label = item.querySelector('.command-palette-label');
      if (!label) return;
      const text = label.textContent.toLowerCase();
      const matches = !query || text.includes(lowerQuery);
      item.style.display = matches ? 'flex' : 'none';
    });
  };

  if (commandPaletteInput) {
    commandPaletteInput.addEventListener('input', (e) => {
      filterCommandItems(e.target.value);
    });
  }

  if (commandPalette) {
    commandPalette.addEventListener('click', (e) => {
      if (e.target === commandPalette) {
        closeCommandPalette();
      }
    });
  }

  if (helpOverlay) {
    helpOverlay.addEventListener('click', (e) => {
      if (e.target === helpOverlay) {
        closeHelpOverlay();
      }
    });

    const closeBtn = helpOverlay.querySelector('[data-help-close]');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeHelpOverlay);
    }
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeSidebar();
      closeCommandPalette();
      closeHelpOverlay();
      return;
    }

    if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
      event.preventDefault();
      openCommandPalette();
      return;
    }

    const activeElement = document.activeElement;
    const isTypingInSearch = searchInputs.includes(activeElement);

    if (event.key === '/' && !isTypingInSearch && activeElement !== commandPaletteInput) {
      event.preventDefault();
      focusSearchInput();
      return;
    }

    if (event.key === 't' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      event.preventDefault();
      toggleTheme();
      return;
    }

    if (event.key === '?' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      event.preventDefault();
      openHelpOverlay();
      return;
    }
  });

  document.addEventListener('click', (event) => {
    const themeToggle = event.target.closest('[data-toggle-theme]');
    if (themeToggle) {
      toggleTheme();
      return;
    }

    const commandItem = event.target.closest('[data-command-item]');
    if (commandItem) {
      const action = commandItem.getAttribute('data-action');
      if (action === 'toggle-theme') {
        event.preventDefault();
        toggleTheme();
        closeCommandPalette();
        return;
      }
      if (action === 'show-help') {
        event.preventDefault();
        closeCommandPalette();
        openHelpOverlay();
        return;
      }
      closeCommandPalette();
      return;
    }

    const tabTrigger = event.target.closest('[data-component-tab]');
    if (tabTrigger) {
      const container = tabTrigger.closest('[data-component]');
      if (!container) {
        return;
      }
      const targetPanel = tabTrigger.getAttribute('data-component-tab');
      container.querySelectorAll('[data-component-tab]').forEach((button) => {
        const isActive = button === tabTrigger;
        button.setAttribute('aria-selected', isActive ? 'true' : 'false');
        button.classList.toggle('is-active', isActive);
      });
      container.querySelectorAll('[data-component-panel]').forEach((panel) => {
        const isMatch = panel.getAttribute('data-component-panel') === targetPanel;
        if (isMatch) {
          panel.removeAttribute('hidden');
        } else {
          panel.setAttribute('hidden', '');
        }
      });
      return;
    }

    const copyButton = event.target.closest('[data-copy-from]');
    if (copyButton) {
      const selector = copyButton.getAttribute('data-copy-from');
      if (!selector) {
        return;
      }
      const codeElement = document.querySelector(selector);
      if (!codeElement) {
        return;
      }
      const textToCopy = codeElement.textContent.trim();
      const fallbackCopy = () => {
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
        } catch (err) {
          console.warn('Copy failed', err);
        }
        document.body.removeChild(textarea);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy).catch(fallbackCopy);
      } else {
        fallbackCopy();
      }
      const originalLabel = copyButton.textContent;
      copyButton.classList.add('is-copied');
      copyButton.textContent = 'Copied';
      window.setTimeout(() => {
        copyButton.classList.remove('is-copied');
        copyButton.textContent = originalLabel;
      }, 2000);
    }
  });

  window.addEventListener('resize', () => {
    if (desktopQuery.matches) {
      document.body.style.overflow = '';
    }
  });
})();
