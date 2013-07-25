;(function($) {
  $.fn.kernr = function() {
    return this.each(function() {
      $(this).html(function() {
        var that    = this,
          kerning = $(this).data('kernr');
        if (kerning) {
          $.each(kerning, function(letters, distance) {
            var split = letters.split(""),
              regex = new RegExp('('+split[0]+'(?![^<]*\\>))('+split[1]+'(?![^<]*\\>))');
            result = $(that).html().replace(regex, "<span style=\"margin-right: " + distance + ";\">$1</span>$2");
            $(that).html(result);
          });
        } else {
          result = $(that).html();
        }
        return result;
      });
    });
  }
}(jQuery));