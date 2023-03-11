//Helper
Template.AdminCategories.helpers({
    rooturl: Meteor.absoluteUrl(""),    
    tableSettings : function () {
      return {
          fields: [
            { key: 'category', label: 'Category' },
            {
              key: 'action',
              label: 'Aksi',
              fn: function (name, object) {
                //var html = '<a name="' + object._id +'" class="deleteLink" id="'+ object._id +'" target="_blank" href="javascript:void(0)"> Hapus </a>';
                var html = '<button type="button" class="btn btn-danger btn-xs deleteLink" id="'+ object._id +'">Hapus</button>';
                html += '&nbsp; <button type="button" class="btn btn-warning btn-xs updateLink" id="'+ object._id +'">Edit</button>';
                return new Spacebars.SafeString(html);
              }
            },
          ]
      };
    },
});

//Event
Template.AdminCategories.events({	
	'click .deleteLink':function(event) {
    swal({
      title: "Hapus Data?",
      text: "Apakah anda yakin ingin menghapus data ini?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Ya"
    }).then((result) => {
      if (result.value) {
        Meteor.call('blogcategory.remove', event.currentTarget.id)
        swal(
          'Deleted!',
          'Data Berhasil Dihapus.',
          'success'
        )
      // result.dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
      }
    })
  },
  'click .updateLink': function (event) {
    Router.go('/admin/categories/'+event.currentTarget.id);
  }
});