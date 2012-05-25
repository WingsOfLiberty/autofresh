function get_local_storage()
{
  var current_patterns = localStorage['match_patterns'];
  if (typeof(current_patterns) === 'undefined')
  {
    current_patterns = {};
  }
  else
  {
    current_patterns = JSON.parse(current_patterns);
  }
  return current_patterns;
}
var check_count = 0;
var check = function()
{
  if ($.trim(localStorage['sentinel_url']) === "" &&
      localStorage['init'] !== 1)
  {
    localStorage['init'] = 1;
    return alert("AutoFresh requires a url path to sentinel.php");
  }
  $.getJSON(localStorage['sentinel_url'],
            function(data)
            {
              if (data.success)
              {
                reload_tabs();
              }
              check_count++;
              if (check_count < 100)
              {
                setTimeout(check, 1000);
              }
              else
              {
                location.reload();
              }
            }).error(function() { 
              location.reload();
            });
};

