jQuery(document).ready(function($) {
    
    $('.ajaxAction').each(function(){
    
        $(this).click(function( event ){
            event.preventDefault();
            var action = $(this).data('action');
            var target = $(this).data('target');
            var response = '';
            
            response = ajaxActions(action);
            
            if(target){
                if (target == 'console')
                    console.log(response);

                if(target.length > 0)
                    $(target).html(response);   
            }     
        });
    });
    
    function ajaxActions(action){
        if(action == 'getData')
            return getData();
        if(action == 'ajaxRequest');
            return ajaxRequest();
    }
    
    function getData(){
        $('li').removeClass('disabled');
        return "success";
    }
    
    function ajaxRequest(url){
        if(!url)
            return false;
        var ajaxResponse = '';
        $.ajax({
            url: url,
            async:false,
            type:"get",
            context: this,
            success: function (data) {
                ajaxResponse = data;
            },
            dataType:"json"});
        return ajaxResponse;         
    }
    
});
