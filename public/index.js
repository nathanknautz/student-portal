/* global Vue, VueRouter, axios */

var LoginPage = {
  template: "#login-page",
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var params = { 
          auth: { email: this.email, password: this.password }
        };
      axios
        .post("/user_token", params)
        .then(function(response) {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          router.push("/resumes/student_ref");
        })
        .catch(function(error) {
          this.errors = ["Invalid email or password"];
          this.email = "";
          this.password = "";
        }.bind(this)
        );
    }
  },
  computed: {}
};

var ShowResumePage = {
  template: "#show-resume-page",
  data: function() {
    return {
      student: {
        experiences: [],
        educations: [],
        skills: [],
        capstones: []
      }
    };
  },
  created: function() {
    axios.get("/resumes/ + student.id")
    .then(function(response) {
      this.student = response.data;
    }).bind(this);
  },
  methods: {},
  computed: {}
};

var EditResumePage = {
  template: "#edit-resume-page",
  data: function() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      errors: []
      };
    },
  created: function() {
    axios.get("/resumes/ + student.id")
    .then(function(response) {
      var student = response.data;
      this.student.name;
    }).bind(this);

  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.firstName,
        last_name: this.lastName, 
        email: this.email
      };
      axios
      .patch("/resumes/" + this.$route.params.id, params)
      .then(function(response) {
        router.push("/resumes/" + this.$route.params.id);
      }).bind(this)
      .catch(function(error) {
        this.errors = error.response.data.errors;
      }).bind(this);
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: LoginPage },
           { path: "/resumes/:id", component: ShowResumePage },
           { path: "/resumes/:id/edit", component: EditResumePage}],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router,
  created: function() {
    var jwt = localStorage.getItem("jwt");
    if (jwt) {
      axios.defaults.headers.common["Authorization"] = jwt;
    }
  }
});



