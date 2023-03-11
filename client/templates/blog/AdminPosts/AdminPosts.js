Template.AdminPosts.helpers({
    posts: function() {
        return Posts.find();
    },
    tableSettings : function () {
        return {
            fields: [
              { key: 'title', label: 'Title', headerClass: 'col-md-4' },
              { key: 'category', label: 'Category', headerClass: 'col-md-1' },
              { key: 'summary', label: 'Summary', headerClass: 'col-md-4' },
              { key: 'date', label: 'Date', headerClass: 'col-md-1',fn: function (value) { return moment(value).format('YYYY-MM-DD'); } },
              {
                key: 'action',
                label: 'Aksi', headerClass: 'col-md-2',
                fn: function (name, object) {
                  //var html = '<a name="' + object._id +'" class="deleteLink" id="'+ object._id +'" target="_blank" href="javascript:void(0)"> Hapus </a>';
                  var html = '<button type="button" class="btn btn-primary btn-danger btn-xs deleteLink" id="'+ object._id +'">Hapus</button>';
                  html += '&nbsp; <button type="button" class="btn btn-primary btn-warning btn-xs editPost" id="'+ object._id +'">Edit</button>';
                  return new Spacebars.SafeString(html);
                }
              },
            ]
        };
      },
});

Template.AdminPosts.events({
    'click .editPost': function(event) {
        Router.go('/admin/posts/' + event.currentTarget.id);
    },
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
            Meteor.call('post.remove', event.currentTarget.id)
            swal(
              'Deleted!',
              'Data Berhasil Dihapus.',
              'success'
            )
          // result.dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
          }
        })
      },
});
