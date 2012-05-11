
function save_options() {
  var $pattern = $("input[name='match_pattern']");
  var pattern = $.trim($pattern.val());
  if (pattern === "")
  {
    return alert("No match pattern specified");
  }
  try 
  {
    var regexp = new RegExp(pattern);
  }
  catch(e) 
  {
    return alert("Invalid regular expression /" + pattern + "/");
  }
  var $name = $("input[name='match_pattern_name']");
  var name = $.trim($name.val());
  if (name === "")
  {
    return alert("No name specified for match pattern");
  }
  $pattern.val('');
  $name.val('');
  save_match_patterns(name, pattern);
}

function save_match_patterns(name, pattern)
{
  var current_patterns = get_local_storage();
  current_patterns[name] = {'name' : name,
                            'active' : true,
                            'pattern' : pattern};
  console.log(JSON.stringify(current_patterns));
  localStorage['match_patterns'] = JSON.stringify(current_patterns);
  show_config();
}

function show_config()
{
  $('#match_pattern_list tbody').empty();
  var patterns = get_local_storage();
  $.each(patterns, function(index, pattern)
  {
    var string = "<tr>";
    string += '<td class="name">' + pattern.name + '</td>';
    string += '<td>' + pattern.pattern + '</td>';
    string += '<td><a class="delete" style="cursor:pointer;">Delete</a></td>';
    string += '</tr>';
    $('#match_pattern_list tbody').append(string);
  });
  $('.delete').click(function(e) {
    delete_regexp($(this).parent().siblings('.name').text());
  });
  $("input[name='sentinel_url']").val(localStorage['sentinel_url']);
}

function delete_regexp(name)
{
  var current_patterns = get_local_storage();
  delete current_patterns[name];
  localStorage['match_patterns'] = JSON.stringify(current_patterns);
  show_config();
}

function save_sentinel(save_sentinel) 
{
  var sentinel_url = $.trim($("input[name='sentinel_url']").val());
  if (sentinel_url === "")
  {
    return alert("AutoFresh will be turned off until a valid sentinel url is entered");
  }
  localStorage['sentinel_url'] = sentinel_url;
}

$(document).ready(function() {
  $('button.add').click(save_options);
  $('button.save').click(save_sentinel);
  show_config();
});
