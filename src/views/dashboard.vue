<template>
<div class="layout">
  <Layout>
    <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
      <Menu active-name="1-1" theme="dark" width="auto" :class="menuitemClasses">
        <MenuItem name="1-1">
        <router-link to="/dashboard/home">
          <Icon type="ios-navigate"></Icon>
          <span>Dashboard</span>
        </router-link>
        </MenuItem>
        <MenuItem name="1-2">
        <router-link to="/dashboard/students">
          <Icon type="ios-navigate"></Icon>
          <span>Students</span>
        </router-link>
        </MenuItem>
        <MenuItem name="1-3">
        <Icon type="ios-search"></Icon>
        <span>Option 2</span>
        </MenuItem>
        <MenuItem name="1-4">
        <Icon type="ios-settings"></Icon>
        <span>Option 3</span>
        </MenuItem>
      </Menu>
    </Sider>
    <Layout>
      <Header :style="{padding: 0}" class="layout-header-bar">
        <Row>
          <Col span="3">
            <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
          </Col>
          <Col span="10" offset="10">
            <Input class="search" search enter-button="Search" placeholder="Enter something..."  />
          </Col>
        </Row>  
      </Header>
      <Content :style="{margin: '20px', minHeight: '260px'}">
        <router-view/>
      </Content>
    </Layout>
  </Layout>
</div>
</template>

<script>
export default {
  name: 'dashboard',
  data() {
    return {
      isCollapsed: false
    }
  },
  computed: {
    rotateIcon() {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ];
    },
    menuitemClasses() {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    }
  }
}
</script>

<style lang="scss">
.layout {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
  height: 100vh;
}

.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}

.search {
  margin-top: 14px;
}

.menu-icon {
  transition: all .3s;
}

.rotate-icon {
  transform: rotate(-90deg);
}

.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width .2s ease .2s;
}

.menu-item i {
  transform: translateX(0px);
  transition: font-size .2s ease, transform .2s ease;
  vertical-align: middle;
  font-size: 16px;
}

.collapsed-menu span {
  width: 0px;
  transition: width .2s ease;
}

.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size .2s ease .2s, transform .2s ease .2s;
  vertical-align: middle;
  font-size: 22px;
}
.ivu-layout-sider-children {
  height: 100vh;
}
</style>
