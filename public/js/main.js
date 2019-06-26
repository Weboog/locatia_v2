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
    //Focus event
    fieldsInput.on('focus', function (e) {
        // var parent = $(e.target).parents('.sorting__list:eq(0)');
        // $(parent).find('span.start').text($(this).data('role'));
    });

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
    minPrice.on('keyup', function (e) {
        var priceValue = $(this).val();
        var dashPrice = $('#dash_price');
        price.min.value = priceValue;
        if ($(this).siblings('#max_price').val().length === 0) {
            var flag = price.min.flag;
            if (priceValue.length === 0){
                flag = '';
            }
            priceValue = flag  + priceValue;
        } else {
            if (!dashPrice.visible) {
                dashPrice.css({
                    visibility: 'visible'
                });
            }

            if (priceValue.length > 0) {
                var txt = $('#end_price').text();
                var replaced = txt.replace(price.max.flag, '');
                $('#end_price').text(replaced);
                //console.log(price.min.flag)
            } else {
                var txt = $('#end_price').text();
                var replaced = price.max.flag + txt;
                $('#end_price').text(replaced);
            }
        }
        $('#start_price').text(priceValue + ' DH ');
        if ($(this).val().length === 0) {
            dashPrice.css({
                visibility: 'hidden'
            });
            $('#start_price').text('');
        }

    });

    maxPrice.on('keyup', function (e) {
        var priceValue = $(this).val();
        var dashPrice = $('#dash_price');
        price.max.value = priceValue;
        if ($(this).siblings('#min_price').val().length === 0) {
            var flag = price.max.flag;
            if (priceValue.length === 0){
                flag = '';
            }
            priceValue = flag  + priceValue;
        } else {

            if (!dashPrice.visible) {
                dashPrice.css({
                    visibility: 'visible'
                });
            }

            if (priceValue.length > 0) {
                var txt = $('#start_price').text();
                var replaced = txt.replace(price.min.flag, '');
                $('#start_price').text(replaced);
                //console.log(price.min.flag)
            } else {
                var txt = $('#start_price').text();
                var replaced = price.min.flag + txt;
                $('#start_price').text(replaced);
            }

        }
        $('#end_price').text(priceValue + ' DH ');
        if ($(this).val().length === 0) {
            dashPrice.css({
                visibility: 'hidden'
            });
            $('#end_price').text('');
        }
    });

    //Change calue event
    fieldsInput.on('keyup', function (e) {
        /*if (isNaN(parseInt(e.key)) || e.target.value.length > 4) {
            str = e.target.value;
            sliced = str.slice(0, -1);
            e.target.value = sliced;
            return false;
        }
        var parent = $(e.target).parents('.sorting__list:eq(0)');
        if ($(this).siblings('input').val() === '') {
            $(parent).find('span.start').text($(this).data('role') + $(this).val() + ' DH');
            $(parent).find('span.end').text('');
        }else {
            if ($(this).hasClass('mx')) {
                $(parent).find('span.end').text($(this).val() + ' DH ');
            }else{
                $(parent).find('span.start').text($(this).val() + ' DH - ');
            }

        }*/


    })
    //HEADER///////////////////////////////////////////

});