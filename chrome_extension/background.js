var reload_tabs = function() {  
  chrome.windows.getAll({ populate: true }, function(windows)
  {
    windows.forEach(function(window)
    {
      window.tabs.forEach(function(tab)
      {
        console.log(tab);
        if (/fedev/.test(tab.url))
        {
          console.log("Reloading " + tab.url);
          chrome.tabs.reload(tab.id);
        }
      });
    });
  });
};

var check = function()
{
  $.getJSON('http://fedev.utah.trulia.com/~dwest/refreshment/sentinel.php',
            function(data)
            {
              if (data.success)
              {
                reload_tabs();
              }
              setTimeout(check, 1000);       
            });
};
check();
