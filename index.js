wp.blocks.registerBlockType('kbcarte/timed-content', {
    title: 'Timed Content',
    icon: 'smiley',
    category: 'common',
    attributes: {
        posts: {type: 'array'}
    },
    edit: function(props){
        function updateContent(event){
            props.setAttributes({company_tags: event.target.value});
        }

        return wp.element.createElement(
            "div",
            {
              class: "content-wrapper"
            },
            wp.element.createElement("h3", null, "Timed Content"),
        );
    },
    save: function(props){
        // return is in plugin.php
        // companyCardRend($props)
        return null;
    }
});