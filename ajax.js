/**
*
* Author: Andre Witte
* Contact: andre.witte@freestylemedia.de
* Website: https://www.freestylemedia.de/
* https://github.com/akaw/SymfonyBootstrapDropdownWidget
*
* Copyright (c) 2016 Andre Witte
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*
**/

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
