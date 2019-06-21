wp.blocks.registerBlockType('kbcarte/timed-content', {
    title: 'Timed Content',
    icon: 'clock',
    category: 'common',
    attributes: {
        start_date: {
            type: 'string'
        },
        end_date: {
            type: 'string'
        }
    },
    edit: function(props){
        function updateStart(info){
            props.setAttributes({start_date: info});
        }

        function updateEnd(info){
            props.setAttributes({end_date: info});
        }

        return wp.element.createElement(
            "div",
            {
              class: "content-wrapper"
            },
            wp.element.createElement("h3", null, "Timed Content"),
            wp.element.createElement(
                "div",
                {
                    class: "date-time-wrapper"
                },
                wp.element.createElement(
                    "div",
                    {
                        class: "start-date-contain"
                    },
                    wp.element.createElement("label", {for: "start-date"}, "Start Date"),
                    wp.element.createElement(wp.components.DateTimePicker, {
                        name: "start-date",
                        id: "start-date",
                        onChange: updateStart,
                        currentDate: props.attributes.start_date,
                        is12Hour: true
                    }),
                ),
                wp.element.createElement(
                    "div",
                    {
                        class: "end-date-contain"
                    },
                    wp.element.createElement("label", {for: "end-date"}, "End Date"),
                    wp.element.createElement(wp.components.DateTimePicker, {
                        name: "end-date",
                        id: "end-date",
                        onChange: updateEnd,
                        currentDate: props.attributes.end_date,
                        is12Hour: true
                    }),
                ),
            ),
            wp.element.createElement(wp.editor.InnerBlocks),
        );
    },

    save: function(props){
        return wp.element.createElement(
            "div",
            {
              class: "content-wrapper"
            },
            wp.element.createElement(wp.editor.InnerBlocks.Content),
        );
    }
});