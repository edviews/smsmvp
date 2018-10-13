<template>
<div>
  <h1>Students</h1>
  <Card :bordered="false">
    <Row type="flex" justify="start" align="middle">
      <Col :xs="2" :sm="1"><Avatar icon="ios-person" /></Col>
      <Col span="6"><p>Kerron Gordon</p></Col>
      <Col span="8"><p>kgpsounds.com@gmail.com</p></Col>
      <Col span="6"><p>Active</p></Col>
      <Col span="2"><Icon type="md-create" /></Col>
    </Row>
  </Card>
  <Card :bordered="false">
    <Row type="flex" justify="start" align="middle">
      <Col :xs="2" :sm="1"><Avatar icon="ios-person" /></Col>
      <Col span="6"><p>Kerron Gordon</p></Col>
      <Col span="8"><p>kgpsounds.com@gmail.com</p></Col>
      <Col span="6"><p>Active</p></Col>
      <Col span="2"><Icon type="md-create" /></Col>
    </Row>
  </Card>
  <Card :bordered="false">
    <Row type="flex" justify="start" align="middle">
      <Col :xs="2" :sm="1"><Avatar icon="ios-person" /></Col>
      <Col span="6"><p>Kerron Gordon</p></Col>
      <Col span="8"><p>kgpsounds.com@gmail.com</p></Col>
      <Col span="6"><p>Active</p></Col>
      <Col span="2"><Icon type="md-create" /></Col>
    </Row>
  </Card>
  <Card :bordered="false">
    <Row type="flex" justify="start" align="middle">
      <Col :xs="2" :sm="1"><Avatar icon="ios-person" /></Col>
      <Col span="6"><p>Kerron Gordon</p></Col>
      <Col span="8"><p>kgpsounds.com@gmail.com</p></Col>
      <Col span="6"><p>Active</p></Col>
      <Col span="2"><Icon type="md-create" /></Col>
    </Row>
  </Card>
</div>
</template>

<script>
export default {
  name: "students"
};
</script>

<style lang="scss" scoped>
.ivu-card {
  margin: 10px;
}
</style>

