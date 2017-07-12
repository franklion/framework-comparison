Vue.component( 'my-hobby', {
    props : [ 'hobby', 'id' ],
    template : `<li @click="removeHobby">{{ hobby }}</li>`,
    methods : {
        removeHobby() {
            this.$emit( 'hobbyremoved', this.id )
        }
    }
} );

let vm = new Vue( {
    el : '#app',
    data : {
        newHobby : '',
        isHobbyDeleted : false,
        hobbies : [ 'riding bicycle', 'watching movie' ]
    },
    computed : {
        hobbyCounter (){
            return this.hobbies.length;
        }
    },
    methods : {
        addNewHobby() {

            var value = this.newHobby && this.newHobby.trim()
            if ( !value ) {
                return
            }

            this.hobbies.push( this.newHobby );
            this.newHobby = ''
        },
        removeHobby( index ) {
            this.hobbies.splice( index, 1 );
            this.isHobbyDeleted = true;
        },
        test() {
            console.log( 123 )
        }
    }
} )