import Vue from "vue";

import {
  Pagination,
  Loading,
  Popover,
  MessageBox,
  Input,
  Form,
  FormItem,
  Dialog,
  Table,
  TableColumn,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Message,
  Badge,
} from "element-ui";

Vue.use(Pagination);
Vue.use(Badge);
Vue.use(Popover);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Dialog);
Vue.use(TableColumn);
Vue.use(Table);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Dropdown);
Vue.use(Button);
Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
