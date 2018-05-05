Ext.tip.QuickTipManager.init();

Ext.create('Ext.data.Store', {
    storeId:'userStore',
    fields:['name', 'phonenumber'],
    data:[
        {name:"Andre Baresel", phonenumber:883795437},
        {name:"Md Sharif Hossain", phonenumber:389345439},
        {name:"Sabbir ahmed", phonenumber:549885},
        {name:"Max plank", phonenumber:18782738},
        {name:"Angelina jolly", phonenumber:0004353}
    ]
});

Ext.create('Ext.grid.Panel', {
    title: 'Action Column for user',
    store: Ext.data.StoreManager.lookup('userStore'),
    floating: true,
    centered: true,
    columns: [
        {text: 'Name',  dataIndex:'name', flex:1},
        {text: 'Phone Number',  dataIndex:'phonenumber',flex:1},
        {
            xtype:'actioncolumn',
            text:'Action',
            flex:1,
            items: [{
                iconCls: 'x-fa fa-user',
                handler: function(grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                    Ext.Msg.alert("Clicked name" , rec.get('name'));
                }
            }]
        }
    ],
    width: 600,
    renderTo: Ext.getBody()
});
