$(document).ready(function(){
    $('#myNameP').on('click', function(){
        $('#myNameP').addClass('hidden')
        $('#myNameInput').removeClass('hidden')
        $('#myNameInput').trigger('focus')
        $('#myNameInput').val($('#myNameP').text())
    })

    $('#myNameInput').on('blur', function(){
        $('#myNameP').removeClass('hidden')
        $('#myNameInput').addClass('hidden')
        $('#myNameP').text($('#myNameInput').val())
    })

    $('#myBioP').on('click', function(){
        $('#myBioP').addClass('hidden')
        $('#myBioInput').removeClass('hidden')
        $('#myBioInput').trigger('focus')
        $('#myBioInput').val($('#myBioP').text())
    })

    $('#myBioInput').on('blur', function(){
        $('#myBioP').removeClass('hidden')
        $('#myBioInput').addClass('hidden')
        $('#myBioP').text($('#myBioInput').val())
    })
      $('#myDateP').on('click', function(){
        $('#myDateP').addClass('hidden')
        $('#myDateInput').removeClass('hidden')
        $('#myDateInput').trigger('focus')
        $('#myDateInput').val($('#myDateP').text())
    })

    $('#myDateInput').on('blur', function(){
        $('#myDateP').removeClass('hidden')
        $('#myDateInput').addClass('hidden')
        $('#myDateP').text($('#myDateInput').val())
    })
    $('#myJobP').on('click', function(){
        $('#myJobP').addClass('hidden')
        $('#myJobInput').removeClass('hidden')
        $('#myJobInput').trigger('focus')
        $('#myJobInput').val($('#myJobP').text())
    })

    $('#myJobInput').on('blur', function(){
        $('#myJobP').removeClass('hidden')
        $('#myJobInput').addClass('hidden')
        $('#myJobP').text($('#myJobInput').val())
    })
    $('#myCollegeP').on('click', function(){
        $('#myCollegeP').addClass('hidden')
        $('#myCollegeInput').removeClass('hidden')
        $('#myCollegeInput').trigger('focus')
        $('#myCollegeInput').val($('#myCollegeP').text())
    })

    $('#myCollegeInput').on('blur', function(){
        $('#myCollegeP').removeClass('hidden')
        $('#myCollegeInput').addClass('hidden')
        $('#myCollegeP').text($('#myCollegeInput').val())
    })
})


