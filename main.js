

$(document).ready(function() {
    $('.editable').on('click', function() {
    var $this = $(this);
    if($this.attr('editing') != '1') {
        
        $(document).find('.editable').each(function() {
            var input = $('<input class="editing" />').val($(this).text());
            $(this).replaceWith(input)
        });
    }
    else {
        $this.text('Edit').removeAttr('editing')
        $(document).find('input.editing').each(function() {
            var div = $('<div class="editable" />').text($(this).val())
            $(this).replaceWith(div)
        })
    }
})
})
