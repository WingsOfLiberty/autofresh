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

