<template>
<div class="studentlist">
  <h1>Students</h1>

  <div class="headcard">
    <Row type="flex" justify="start" align="middle">
      <Col span="1">ID</Col>
      <Col span="6" class="nameava">
      <p class="name">Name</p>
      </Col>
      <Col span="7">
      <p>Email</p>
      </Col>
      <Col span="5">
      <p>Status</p>
      </Col>
      <Col span="4">Number</Col>
      <Col span="1">Edit</Col>
    </Row>
  </div>


  <Scroll :height="size">

  <Card :bordered="false" v-for="student in students" :key="student.id">
    <Row type="flex" justify="start" align="middle">
      <Col span="1">{{student.id}}</Col>
      <Col span="6" class="nameava">
      <Avatar icon="ios-person" :src="student.avatar" />
      <p class="name">{{student.fname}} {{student.lname}}</p>
      </Col>
      <Col span="7">
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
let students = [];

for (let i = 0; i < 20; i++) {
  var student = {
    id: i + 1,
    fname: faker.name.firstName(),
    lname: faker.name.lastName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
    phone: faker.phone.phoneNumberFormat(),
    status: "Active"
  };
  students.push(student);
}

function getpageHeight(e) {
  const page = e.parentElement.offsetHeight
  const title = e.children.item(0).offsetHeight
  const heading = e.children.item(1).offsetHeight
  const topsize = title + heading
  return page - topsize
}

export default {
  name: "students",
  data() {
    return {
      students,
      size: 0,
    };
  },
  mounted() {
    this.size = getpageHeight(this.$el)
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
.nameava {
  display: flex;
  justify-content: start;
  align-items: center;
}

.name {
  margin-left: 10px;
}
</style>

