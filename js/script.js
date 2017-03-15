/**
 * Created by SpectrumGroupe on 15/03/2017.
 */
$(document).ready(function () {
    'use strict';
    $('#short-message').keyup(function updateCharCounter(){
        var $me=$(this),
            maxLength = parseInt($me.attr('maxLength'),10),
            charCount = $me.val().length,
            $counter = $me.siblings('.limit');
            $counter.text('limit:'+ maxLength + 'characters.remaining:' + (maxLength - charCount));

    });
});