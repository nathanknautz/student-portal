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
          router.push("/students/");
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

var StudentsShowPage = {
  template: "#students-show-page",
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
    axios.get("/students/")
    .then(function(response) {
      this.student = response.data;
    }).bind(this);
  },
  methods: {},
  computed: {}
};

var StudentsEditPage = {
  template: "#students-edit-page",
  data: function() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      errors: []
      };
    },
  created: function() {
    axios.get("/students/")
    .then(function(response) {
      var student = response.data;
      this.firsName = student.first_name;
      this.lastName = student.last_name;
      this.email = student.email;
      this.phoneNumber = student.phone_number;
      this.shortBio = student.short_bio;
      this.linkedInUrl = student.linked_in_url;
      this.twitterHandle = student.twitter_handle;
      this.linkedInUrl = student.linked_in_url;
      this.personalBlogUrl = student.personal_blog_url;
      this.onlineResumeUrl = student.online_resume_url;
      this.gitHubUrl = student.github_url;
      this.photo = student.photo;

    }).bind(this);

  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.firstName,
        last_name: this.lastName, 
        email: this.email,
        phone_number: this.phoneNumber,
        short_bio: this.shortBio,
        linkedInUrl: this.linkedInUrl,
        twitter_handle: this.twitterHandle,
        personal_blog_url: this.personalBlogUrl,
        online_resume_url: this.onlineResumeUrl,
        github_url: this.gitHubUrl,
        photo: this.photo
                  };
      axios
      .patch("/students/", params)
      .then(function(response) {
        router.push("/students/");
      }).bind(this)
      .catch(function(error) {
        this.errors = error.response.data.errors;
      }).bind(this);
    }
  },
  computed: {}
};

var ExperiencesNewPage = {
  template: "#experiences-new-page",
  data: function() {
    return {
        startDate: "",
        endDate: "",
        jobTitle: "",
        companyName: "",
        details: ""
    };
  },
  methods: {
    submit: function() {
      var params = {
        start_date: this.startDate,
        end_date: this.endDate,
        job_title: this.jobTitle,
        company_name: this.companyName,
        details: this.details
      };
      axios
      .post("/experiences/", params)
      .then(function(response) {
        router.push("/students/");
      })
      .catch(function(error) {
        this.errors = error.response.data.errors;
      }.bind(this));
    }
  },
  computed: {}
};

var ExperiencesEditPage = {
  template: "#experiences-edit-page",
  data: function() {
    return {
      startDate: "",
      endDate: "",
      jobTitle: "",
      companyName: "",
      details: ""
    };
  },
  created: function() {
    axios.get("/experiences/" + this.$route.params.id)
    .then(function(response) {
      var experience = response.data;
      this.startDate = experience.start_date;
      this.endDate = experience.end_date;
      this.jobTitle = experience.job_title;
      this.companyName = experience.company_name;
      this.details = experience.details;
    }).bind(this);
  },
  methods: {
    submit: function() {
      var params = {
        start_date: this.startDate,
        end_date: this.endDate,
        job_title: this.jobTitle,
        company_name: this.companyName,
        details: this.details
      };
       axios
      .patch("/experiences/" + this.$route.params.id, params)
      .then(function(response) {
        router.push("/students/");
      })
      .catch(function(error) {
        this.errors = error.response.data.errors;
      }.bind(this));

    }
  },
  computed: {}
};

var EducationNewPage = {
  template: "#education-new-page",
  data: function() {
    return {
        startDate: "",
        endDate: "",
        degree: "",
        universityName: "",
        details: ""
    };
  },
  methods: {
    submit: function() {
      var params = {
        start_date: this.startDate,
        end_date: this.endDate,
        degree: this.degree,
        university_name: this.universityName,
        details: this.details
      };
      axios
      .post("/education/", params)
      .then(function(response) {
        router.push("/students/")
      })
      .catch(function(error) {
        this.errors = error.response.data.errors;
      }.bind(this));
    }
  },
  computed: {}
};

var EducationEditPage = {
  template: "#education-edit-page",
  data: function() {
    return {
      startDate: "",
      endDate: "",
      degree: "",
      universityName: "",
      details: ""
    };
  },
  created: function() {
    axios.get("/education/" + this.$route.params.id)
    .then(function(response) {
      var education = response.data;
      this.startDate = education.start_date;
      this.endDate = education.end_date;
      this.degree = education.degree;
      this.universityName = education.university_name;
      this.details = education.details;
    }).bind(this);
  },
  methods: {
    submit: function() {
      var params = {
        start_date: this.startDate,
        end_date: this.endDate,
        degree: this.degree,
        university_name: this.universityName,
        details: this.details
      };
       axios
      .patch("/education/" + this.$route.params.id, params)
      .then(function(response) {
        router.push("/students/");
      })
      .catch(function(error) {
        this.errors = error.response.data.errors;
      }.bind(this));

    }
  },
  computed: {}
};

var SkillsNewPage = {
  template: "#skills-new-page",
  data: function() {
    return {
        name: ""
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name
      };
      axios
      .post("/skills/", params)
      .then(function(response) {
        router.push("/students/");
      })
      .catch(function(error) {
        this.errors = error.response.data.errors;
      }.bind(this));
    }
  },
  computed: {}
};

var SkillsEditPage = {
  template: "#skills-edit-page",
  data: function() {
    return {
      name: ""
    };
  },
  created: function() {
    axios.get("/skills/" + this.$route.params.id)
    .then(function(response) {
      var skill = response.data;
      this.name = skill.name;
    }).bind(this);
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
      };
       axios
      .patch("/skills/" + this.$route.params.id, params)
      .then(function(response) {
        router.push("/students/");
      })
      .catch(function(error) {
        this.errors = error.response.data.errors;
      }.bind(this));

    }
  },
  computed: {}
};

var CapstonesNewPage = {
  template: "#capstones-new-page",
  data: function() {
    return {
        name: "",
        description: "",
        url: "",
        screenshot: ""
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        description: this.description,
        url: this.url,
        screenshot: this.screenshot
        };

      axios
      .post("/capstones/", params)
      .then(function(response) {
        router.push("/students/");
      })
      .catch(function(error) {
        this.errors = error.response.data.errors;
      }.bind(this));
    }
  },
  computed: {}
};

var CapstonesEditPage = {
  template: "#capstones-edit-page",
  data: function() {
    return {
      name: "",
      description: "",
      url: "",
      screenshot: ""
    };
  },
  created: function() {
    axios.get("/capstones/" + this.$route.params.id)
    .then(function(response) {
      var capstone = response.data;
      this.name = capstone.name;
      this.description = capstone.description;
      this.url = capstone.url;
      this.screenshot = capstone.screenshot;
    }).bind(this);
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        description: this.description,
        url: this.url,
        screenshot: this.screenshot,
      };
       axios
      .patch("/capstones/" + this.$route.params.id, params)
      .then(function(response) {
        router.push("/students/");
      })
      .catch(function(error) {
        this.errors = error.response.data.errors;
      }.bind(this));

    }
  },
  computed: {}
};

var LogoutPage = {
  created: function() {
    axios.defaults.headers.common["Authorization"] = undefined;
    localStorage.removeItem("jwt");
    router.push("/");
  },
};

var router = new VueRouter({
  routes: [{ path: "/", component: LoginPage },
           { path: "/students/", component: StudentsShowPage },
           { path: "/students/edit", component: StudentsEditPage },
           { path: "/experiences/new", component: ExperiencesNewPage },
           { path: "/experiences/:id/edit/", component: ExperiencesEditPage },
           { path: "/education/new", component: EducationNewPage },
           { path: "/education/:id/edit/", component: EducationEditPage },
           { path: "/skills/new", component: SkillsNewPage },
           { path: "/skills/:id/edit/", component: SkillsEditPage },
           { path: "/capstones/new", component: CapstonesNewPage },
           { path: "/capstones/:id/edit/", component: CapstonesEditPage },
           { path: "/logout/", component: LogoutPage }
           ],
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



