var reload_tabs = function() {  
  var tabs_reloaded = {};
  chrome.windows.getAll({ populate: true }, function(windows)
  {
    windows.forEach(function(window)
    {
      window.tabs.forEach(function(tab)
      {
        $.each(get_local_storage(), function(index, value)
        {
          var regexp = new RegExp(value.pattern);
          if (regexp.test(tab.url) && tabs_reloaded[tab.id] !== true)
          {
            tabs_reloaded[tab.id] = true;
            chrome.tabs.reload(tab.id);
          }
        });
      });
    });
  });
};

check();
