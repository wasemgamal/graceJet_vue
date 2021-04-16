<template>
  <!-- start contact -->
    <div class="contact">
      <section class="container px-5">
        <div class="row white">
          <aside class="col-md-6 ">
            <p>Feel free to contact us at any time.</p>
            <div class="contact-info">
              <div class="">
                <h4>email</h4>
                <span>ops@grace-jet.com</span>
              </div>
              <div class="">
                <h4>PHONE</h4>
                <span>+973 13 606 444 </span>
              </div>
              <div class="">
                <h4>FAX</h4>
                <span>+973 13 606 444</span>
              </div>
              <div class="">
                <h4>Address</h4>
                <span>Building: 743</span>
                <span>Road: 3616</span>
                <span>Seef Area, Block: 436</span>
                <span>P.O.BOX: 18640</span>
                <span>Manama, Kingdom of Bahrain</span>
              </div>
            </div>
          </aside>
          <aside class="col-md-6 contact-form align-items-center d-flex flex-column justify-content-center">
            
            
            <form @submit.prevent="submit" enctype='multipart/form-data'>
              <p>Send us a message</p>
              <transition name="remove" mode="in-out" >
                <div v-if="submitted" :style="{trasitionDelay : delay}">
                  <div class="alert alert-danger alert-dismissible fade show" role="alert"  v-if="!messageStatus">
                    <b>Your message failed to send!</b>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="alert alert-success alert-dismissible fade show" role="alert"  v-if="messageStatus">
                    <b>Your message sent successfully.</b>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                </div>
              </transition>
              <div class="form-group">
                <input 
                  type="text" 
                  class="form-control" 
                  required="" 
                  v-model="name" 
                  id="exampleInputText1" 
                  aria-describedby="emailHelp" 
                  placeholder="Name">
              </div>
              <div class="form-group">
                <input 
                  type="email" 
                  class="form-control"
                  placeholder="Email" 
                  name="email" 
                  id="email" 
                  required=""
                  :class="{ email , error: !email.valid }"
                  v-model="email.value">
                <label class="form-check-label text-danger" v-show="!email.valid" for="exampleCheck1">Oh, please enter a valid email address.</label>
              </div>
              <div class="form-group">
                <textarea 
                  class="form-control" 
                  placeholder="Message" 
                  id="exampleFormControlTextarea1" 
                  rows="7" 
                  required="" 
                  v-model="message.text" 
                  :maxlength="message.maxlength" resizable="false"></textarea>
              </div>
              <div class="d-flex flex-wrap mb-3">
                <button type="submit" class="btn btn-default mb-3">Send</button>
                <div class="">
                  <div class="custom-file">
                    <input 
                      type="file" 
                      class="hidden-file-input" 
                      id="file" 
                      ref="file" 
                      v-on:change="handleFileUpload()"/>
                    <i class="fa fa-plus"></i>
                    <span>attach a file</span>
                  </div>
                </div>
              </div>

            </form>
          </aside>
        </div>
      </section>
    </div>
    <!-- end contact -->
</template>

<script type="text/javascript">

// Regular expression from W3C HTML5.2 input specification:
// https://www.w3.org/TR/html/sec-forms.html#email-state-typeemail
var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export default {
  name: 'contact',
  data: function() {
    return {
      name: "",
      email: {
        value: "",
        valid: true
      },
      message: {
        text: ``,
        maxlength: 255
      },
      file: null,
      submitted: false,
      output:'',
      delay: '1.2s',
      messageStatus:null
    };
  },
  methods: {
    // submit form handler
    submit: function() {
      this.submitted = true;
      var messageData = {
        id: '',
        messageName: this.name,
        messageEmail: this.email.value,
        messageContent: this.message.text,
        messageFile: this.file,
      };
      this.$http.post('http://localhost:3000/messages', messageData
      // function(data){
      //   console.log(data);
      // }
      ) 
      .then(function (response) {
          console.log('success');
          console.log(response);
          this.messageStatus = true;
      })
      .catch(function (error) {
          // this.output = error;
          console.log(error);
           this.messageStatus = false;
      });
      this.$http.post('/images', this.file,{emulateJSON: true})
    },
    //file handling
    handleFileUpload(){
      this.file = this.$refs.file.files[0].data;
    },
    // validate by type and value
    validate: function(type, value) {
      if (type === "email") {
        this.email.valid = this.isEmail(value) ? true : false;
      }
    },
    // check for valid email adress
    isEmail: function(value) {
      return emailRegExp.test(value);
    },
    // check or uncheck all
    checkAll: function(event) {
      this.selection.features = event.target.checked ? this.features : [];
    }
  },
  watch: {
    // watching nested property
    "email.value": function(value) {
      this.validate("email", value);
    }
  }
};
</script>
