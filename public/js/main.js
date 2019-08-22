$(document).ready(function () {

    //HEADER///////////////////////////////////////////
    //MOBILE VERSION ACTIONS//
    var filtersActivators = $('.filters__list .activator');
    var cancel = $('.cancel');
    var items = $('.item');

    filtersActivators.on('click', function () {
        $(this).next().toggleClass('show');
    });
    cancel.on('click', function () {
        $(this).parent().removeClass('show');
    });

    //ASSIGN VALUE AND CLOSE LISTBOX
    items.on('click', function (e) {
        var labelSelected = $(e.target).parents('.filters__list').find('span.label__selected')[0];
        labelSelected.innerHTML = e.target.textContent;
        ss = $(e.target).parents('div.listbox')[0];
        ss.classList.toggle('show');
    })

    //MIN MAX FIELDS//
    var fieldsInput = $('.fields input');
    var minPrice = $('#min_price');
    var maxPrice = $('#max_price');

    //Keyup event
    const price = {
        min: {
            value: 0,
            flag: 'à partie de : '
        },
        max: {
            value: 0,
            flag: 'inférieur à : '
        }
    };

    //Change value event
    fieldsInput.on('keyup', function (e) {

        if (!isNaN(parseInt(e.key)) || e.key === 'Backspace' ) {

            var currentValue = $(this).val();
            var startPrice = $(this).parents('.fields:eq(0)').prev().find('span.result > .start');
            var endPrice = $(this).parents('.fields:eq(0)').prev().find('span.result > .end');
            var dash = $(this).parents('.fields:eq(0)').prev().find('span.result > .dash');
            var unit;
            var flag = '';
            var spanTarget;

            if (e.target.dataset.unit === 'DH') {
                unit = ' DH';
            } else {
                unit = ' M²';
            }

            switch (e.target.className) {
                case 'mn':
                    flag = price.min.flag;
                    spanTarget = startPrice;
                    break;
                case 'mx':
                    flag = price.max.flag;
                    spanTarget = endPrice;
                    break;
            }

            if ($(this).siblings('input').val().length === 0) {

                if (currentValue.length === 0) {
                    flag = '';
                    unit = '';
                }
                currentValue = flag + currentValue;
                spanTarget.text(currentValue + unit);

            } else {

                var siblingText = spanTarget.siblings('span').not('.dash');

                if (!dash.visible) {
                    dash.css({
                        visibility: 'visible'
                    })
                }

                if ($(this).val().length === 0) {

                    dash.css({
                        visibility: 'hidden'
                    });
                    unit = '';

                    if (e.target.className === 'mn') {
                        flag = price.max.flag
                    } else {
                        flag = price.min.flag;
                    }
                    siblingText.html( flag + siblingText.html() + unit);
                } else {
                    siblingText.html(siblingText.html().replace(/[^0-9]/g, '') + unit);
                }

                spanTarget.text(currentValue + unit);
            }
        }

    })
    
    //SELECT PIECES//////////////////////////////////////////////////////
    var checkRooms = $('.checkbox input[type=checkbox]');
    checkRooms.on('click', function (e) {

        var startPrice = $(this).parents('.pieces:eq(0)').prev().find('span.result > .start');
        var endPrice = $(this).parents('.pieces:eq(0)').prev().find('span.result > .end');
        var dash = $(this).parents('.pieces:eq(0)').prev().find('span.result > .dash');
        var checked = $('.checkbox input:checked');

        //Assigning values selected
        if (checked.length > 2) {
            checked.eq(1).prop('checked', false);
        }

        if (checked.eq(0).val() !== undefined) {
            startPrice.text(checked.eq(0).val() + ' P');
        } else {
            startPrice.text('');
        }

        if ( checked.length > 1 && checked.last().val() !== undefined) {
            endPrice.text(checked.last().val() + ' P');
        } else {
            endPrice.text('');
        }

        //Toggle dash separator
        if (checked.length >= 2) {
            dash.css({
                visibility: 'visible'
            })
        } else {
            dash.css({
                visibility: 'hidden'
            })
        }

    })
    //HEADER///////////////////////////////////////////

});