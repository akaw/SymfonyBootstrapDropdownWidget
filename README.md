# SymfonyBootstrapDropdownWidget

In a Controller construct an array like this

        $dropdown = array(
                array(
                     "id" => 12345
                    ,"label" => "Link 1"
                    ,"header" => 0
                    ,"href" => "/#1"
                )
                ,array(
                     "label" => "Block 2"
                    ,"header" => 1
                )
                ,array(
                     "id" => 01234
                    ,"label" => "Link 2.1"
                    ,"header" => 0
                    ,"ajax" => 0
                    ,"href" => "/#2"
                )            
                ,array(
                     "id" => 012341
                    ,"label" => "Link 2.2"
                    ,"header" => 0
                    ,"ajax" => 0
                    ,"href" => "/#3"
                )
                ,array(
                    "header" => 1
                )
                ,array(
                     "id" => 012341
                    ,"label" => "Link 3"
                    ,"header" => 0
                    ,'disabled' => 1
                    ,"ajax" => 0
                    ,"href" => "/#4"
                )
                ,array(
                    "header" => 1
                )                
                ,array(
                     "id" => 012341
                    ,"label" => "Ajax"
                    ,"header" => 0
                    ,"ajax" => 1
                    ,'action' => 'getData'
                    ,'target' => 'console'
                    ,'href' => '#'
                )                
        );
        
        return $this->render('@AppBundle/Resources/views/frontend.html.twig', [
            ,'DropdownItems' => $dropdown
        ]);
        
in a Template add

        {% include 'AppBundle:widget:dropdown.html.twig' with {
            'items': DropdownItems
           ,'id':'dropdowntest' // DOM ELement ID
           ,'label':'My Dropdown'
           ,'button':0 //Render it as a Bootstrap Button
           ,'navbar':1 //Render it for a Bootstrap Navbar
        } %}
