<template>
<div class="studentlist">
  <div class="headcard">
    <Row type="flex" justify="start" align="middle">
      <Col span="6" class="nameava">
      <p class="name">Name</p>
      </Col>
      <Col span="8">
      <p>Email</p>
      </Col>
      <Col span="5">
      <p>Status</p>
      </Col>
      <Col span="4">Number</Col>
      <Col span="1">Edit</Col>
    </Row>
  </div>


  <Scroll :height="size" :on-reach-bottom="getusers">

  <Card :bordered="false" v-for="student in students" :key="student.id" class="card-item">
    <Row type="flex" justify="start" align="middle">
      <Col span="6" class="nameava">
      <Avatar icon="ios-person" style="background-color: #f5f7f9" :src="student.avatar" />
      <p class="name">{{student.fname}} {{student.lname}}</p>
      </Col>
      <Col span="8">
      <p>{{student.email}}</p>
      </Col>
      <Col span="5">
      <p>{{student.status}}</p>
      </Col>
      <Col span="4">{{student.phone}}</Col>
      <Col span="1">
      <Button icon="md-create" type="text" shape="circle"></Button>
      </Col>
    </Row>
  </Card>

  </Scroll>

</div>
</template>

<script>
var faker = require("faker");

export default {
  name: "students",
  data() {
    return {
      students: [],
      size: 500,
    };
  },
  methods: {
    getusers() {
      for (let i = 0; i < 50; i++) {
        var student = {
          id: faker.random.uuid(),
          fname: faker.name.firstName(),
          lname: faker.name.lastName(),
          email: faker.internet.email(),
          avatar: faker.internet.avatar(),
          phone: faker.phone.phoneNumberFormat(),
          status: "Active"
        };
        this.students.push(student)
      }
    },
    getpageHeight() {
      const page = this.$el.parentElement.offsetHeight
      const title = this.$el.children.item(0).offsetHeight
      const heading = this.$el.children.item(1).offsetHeight
      const topsize = title + heading
      return page - topsize
    }
  },
  created() {
    this.getusers()
    // this.size = this.getpageHeight()
  },
  destroyed() {
    // students = []
  },
};
</script>

<style lang="scss" scoped>
.ivu-card,
.headcard {
  margin: 10px;
}
.headcard {
  padding: 5px 16px;
}
.card-item {
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    background: cornflowerblue;
    color: #fff;
  }
}
.nameava {
  display: flex;
  justify-content: start;
  align-items: center;
}

.name {
  margin-left: 10px;
}
</style>

