odoo.define('web_impex', function (require) {
    'use strict';

    var core = require("web.core");
    var Sidebar = require('web.Sidebar');
    var KanbanController = require('web.KanbanController');
    var ListController = require("web.ListController");
    var _t = core._t;
    var rpc = require('web.rpc');

    KanbanController.include({
        /**
         * Hide "Import" button if user has no Import group.
         */
        renderButtons: function () {
            this._super.apply(this, arguments); // Sets this.$buttons

            var has_import_group = false;
            var prom = Promise.resolve()
            prom = this.getSession().user_has_group('smile_web_impex.group_import').then(function(has_group) {
                if(has_group) {
                    has_import_group = true;
                    return has_import_group
                }            
            });

            var button = this.$buttons
            prom.then(function(){
                if (!has_import_group && button != undefined) {
                    button.find('.o_button_import').hide();
                }
            });

        },
    });

    ListController.include({

        /**
         * Hide "Import" button if user has no Import group.
         */
        renderButtons: function () {
            this._super.apply(this, arguments); // Sets this.$buttons

            var has_import_group = false;
            var prom = Promise.resolve()
            prom = this.getSession().user_has_group('smile_web_impex.group_import').then(function(has_group) {
                if(has_group) {
                    has_import_group = true;
                    return has_import_group
                }            
            });

            var button = this.$buttons
            prom.then(function(){
                if (!has_import_group && button != undefined) {
                    button.find('.o_button_import').hide();
                }
            });

        },

        _updateButtons: function(mode){
            if (this.$buttons) {
                this.$buttons.toggleClass('o-editing', mode === 'edit');
                const state = this.model.get(this.handle, {raw: true});

                var has_export_group = false;

                var prom = Promise.resolve()
                prom = this.getSession().user_has_group('smile_web_impex.group_export').then(function(has_group) {
                    if(has_group) {
                        has_export_group = true;
                        return has_export_group
                    }          
                });

                var button = this.$('.o_list_export_xlsx')
                prom.then(function(){
                    if (state.count && has_export_group) {
                        button.show();
                    } else {
                        button.hide();
                    }
                });
            }

        },

    });

});
