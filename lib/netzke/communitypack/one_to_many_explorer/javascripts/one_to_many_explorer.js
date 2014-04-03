{
  initComponent: function() {
    // calling superclass's initComponent
    this.callParent();

    // setting the 'rowclick' event
    var view = this.getComponent('container').getView();
    view.on('itemclick', function(view, record){
      // The beauty of using Ext.Direct: calling 3 endpoints in a row, which results in a single call to the server!
        // fixed, before foreign key was not being extracted, was always assumed to be "id"
        // the primary Key sometimes is not 'id'
        var pk = this.primaryKey //not sure why, but this intermediate step of getting the foreignKey value first is needed
        this.selectContainerRecord({id: record.get(pk)});
      this.getComponent('collection').getStore().load();
    }, this);
  }
}