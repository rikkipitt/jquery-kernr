;(function($) {
  $.fn.kernr = function() {
    return this.each(function() {
      $(this).html(function() {
        var that    = this,
          kerning = $(this).data('kernr');
        $.each(kerning, function(letters, distance) {
          var split = letters.split(""),
            regex = new RegExp('([' + split[0] + '])([' + split[1] + '])');
          result = $(that).text().replace(regex, "<span style=\"margin-right: " + distance + ";\">$1</span>$2");
          $(that).text(result);
        });
        return result;
      });
    });
  }
}(jQuery));