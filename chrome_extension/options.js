
function save_options() {
  console.log(localStorage);
  var $pattern = $("input[name='match_pattern']");
  var pattern = $.trim($pattern.val());
  if (pattern === "")
  {
    return alert("No match pattern specified");
  }

  var $name = $("input[name='match_pattern_name']");
  var name = $.trim($name.val());
  if (name === "")
  {
    return alert("No name specified for match pattern");
  }
  var current_patterns = localStorage['match_patterns'];
  if (typeof(current_patterns) === 'undefined')
  {
    current_patterns = {};
  }
  else
  {
    current_patterns = JSON.parse(current_patterns);
  }
  current_patterns[name] = { 'name' : name,
                            'active' : true,
                            'pattern' : pattern };
  console.log(JSON.stringify(current_patterns));
  localStorage['match_patterns'] = JSON.stringify(current_patterns);
}
function show_config()
{
  //TODO
}
$(document).ready(function() {
  $('button').click(save_options);
  show_config();
});
