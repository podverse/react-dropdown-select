(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"Demo",function(){return v});var r=n(150),a=n.n(r),l=(n(163),n(77),n(160),n(76),n(56),n(7)),o=n.n(l),c=n(0),i=n.n(c),u=(n(154),n(156),n(157)),d=(n(165),n(166),n(155),n(153)),s=n(167);function p(){var e=a()(["\n  background: none;\n  border: 1px solid #555;\n  color: #555;\n  border-radius: 3px;\n  margin: 10px 10px 0;\n  padding: 3px 5px;\n  font-size: 10px;\n  text-transform: uppercase;\n  cursor: pointer;\n  outline: none;\n\n  &.clear {\n    color: tomato;\n    border: 1px solid tomato;\n  }\n\n  :hover {\n    border: 1px solid deepskyblue;\n    color: deepskyblue;\n  }\n"]);return p=function(){return e},e}function h(){var e=a()(["\n  display: flex;\n  justify-content: space-between;\n\n  & div {\n    margin: 10px 0 0 10px;\n    font-weight: 600;\n  }\n"]);return h=function(){return e},e}function m(){var e=a()(["\n  margin: 5px 10px;\n"]);return m=function(){return e},e}function f(){var e=a()(["\n  display: flex;\n  margin: 10px;\n  align-items: baseline;\n  cursor: pointer;\n  border-bottom: 1px dotted transparent;\n  \n  :hover {\n  \tborder-bottom: 1px dotted #ccc;\n  }\n\n  ","\n"]);return f=function(){return e},e}function b(){var e=a()(["\n  overflow: auto;\n  min-height: 10px;\n  max-height: 200px;\n"]);return b=function(){return e},e}function E(){var e=a()(["\n  display: flex;\n  flex-direction: column;\n\n  input {\n    margin: 10px 10px 0;\n    line-height: 30px;\n    padding: 0 20px;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n    :focus {\n      outline: none;\n      border: 1px solid ",";\n    }\n  }\n"]);return E=function(){return e},e}function g(){var e=a()(["\n\t","\n"]);return g=function(){return e},e}var v=function(e){function t(t){var n;return(n=e.call(this,t)||this).setValues=function(e){return n.setState({selectValues:e})},n.contentRenderer=function(e,t){return i.a.createElement("div",null,t.values.length," of ",e.options.length," Selected")},n.noDataRenderer=function(){return i.a.createElement("p",{style:{textAlign:"center"}},i.a.createElement("strong",null,"Ooops!")," No data found")},n.itemRenderer=function(e,t,n,r,a){return i.a.createElement("div",{key:e[n.valueField],onClick:function(){return a.addItem(e)}},i.a.createElement("div",{style:{margin:"10px"}},i.a.createElement("input",{type:"checkbox",checked:a.isSelected(e)}),"   ",e[n.labelField]))},n.dropdownRenderer=function(e,t,r){var a=new RegExp(t.search,"i");return i.a.createElement("div",null,i.a.createElement(x,{color:n.state.color},i.a.createElement(w,null,i.a.createElement("div",null,"Search and select:"),r.areAllSelected()?i.a.createElement(C,{className:"clear",onClick:r.clearAll},"Clear all"):i.a.createElement(C,{onClick:r.selectAll},"Select all")),i.a.createElement("input",{type:"text",value:t.search,onChange:r.setSearch,placeholder:"Type anything"})),i.a.createElement(y,null,e.options.filter(function(t){return a.test(t[e.searchBy]||t[e.labelField])}).map(function(a){return!n.state.keepSelectedInList&&r.isSelected(a)?null:i.a.createElement(S,{disabled:a.disabled,key:a[e.valueField],onClick:a.disabled?null:function(){return r.addItem(a)}},i.a.createElement("input",{type:"checkbox",onChange:function(){return r.addItem(a)},checked:-1!==t.values.indexOf(a)}),i.a.createElement(R,null,a[e.labelField]))})))},n.optionRenderer=function(e,t,n,r){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{onClick:function(t){return r.removeItem(t,e,!0)}},e.label))},n.inputRenderer=function(e,t,n){return i.a.createElement("input",{tabIndex:"1",className:"react-dropdown-select-input",size:n.getInputSize(),value:t.search,onClick:function(){return n.dropDown("open")},onChange:n.setSearch,placeholder:"Type in"})},n.state={multi:!0,disabled:!1,loading:!1,contentRenderer:!1,dropdownRenderer:!1,inputRenderer:!1,itemRenderer:!1,optionRenderer:!1,noDataRenderer:!1,selectValues:[],searchBy:"email",clearable:!0,separator:!0,forceOpen:!1,handle:!0,labelField:"username",valueField:"email",color:"#0074D9",keepSelectedInList:!0,closeOnSelect:!1,openOnTop:!1,dropdownHeight:"300px"},n}return o()(t,e),t.prototype.render=function(){var e=this;return i.a.createElement("div",{className:this.props.className},i.a.createElement("div",null,i.a.createElement("div",{style:{maxWidth:"500px",margin:"0 auto"}},i.a.createElement(k,{placeholder:"Select peoples",addPlaceholder:"+ click to add",color:this.state.color,disabled:this.state.disabled,loading:this.state.loading,searchBy:this.state.searchBy,separator:this.state.separator,clearable:this.state.clearable,keepOpen:this.state.forceOpen,dropdownHandle:this.state.handle,dropdownHeight:this.state.dropdownHeight,multi:this.state.multi,values:[s.a[0]],labelField:this.state.labelField,valueField:this.state.valueField,options:s.a,dropdownGap:5,keepSelectedInList:this.state.keepSelectedInList,onDropdownOpen:function(){},onDropdownClose:function(){},onClearAll:function(){},onSelectAll:function(){},onChange:function(t){return e.setValues(t)},noDataLabel:"No matches found",closeOnSelect:this.state.closeOnSelect,noDataRenderer:this.state.noDataRenderer?function(){return e.noDataRenderer()}:void 0,openOnTop:this.state.openOnTop,itemRenderer:this.state.itemRenderer?function(t,n,r,a,l){return e.itemRenderer(t,n,r,a,l)}:void 0,inputRenderer:this.state.inputRenderer?function(t,n,r){return e.inputRenderer(t,n,r)}:void 0,optionRenderer:this.state.optionRenderer?function(t,n,r,a){return e.optionRenderer(t,n,r,a)}:void 0,contentRenderer:this.state.contentRenderer?function(t,n){return e.contentRenderer(t,n)}:void 0,dropdownRenderer:this.state.dropdownRenderer?function(t,n,r){return e.dropdownRenderer(t,n,r)}:void 0}))),i.a.createElement("p",null," "),i.a.createElement("p",null,i.a.createElement("input",{type:"checkbox",checked:this.state.multi,onChange:function(){return e.setState({multi:!e.state.multi})}})," ","Multi",i.a.createElement("br",null),i.a.createElement("input",{type:"checkbox",checked:this.state.disabled,onChange:function(){return e.setState({disabled:!e.state.disabled})}})," ","Disabled",i.a.createElement("br",null),i.a.createElement("input",{type:"checkbox",checked:this.state.openOnTop,onChange:function(){return e.setState({openOnTop:!e.state.openOnTop})}})," ","Open on top of select",i.a.createElement("br",null),i.a.createElement("input",{type:"checkbox",checked:this.state.loading,onChange:function(){return e.setState({loading:!e.state.loading})}})," ","Loading",i.a.createElement("br",null),i.a.createElement("input",{type:"checkbox",checked:this.state.clearable,onChange:function(){return e.setState({clearable:!e.state.clearable})}})," ","Clearable",i.a.createElement("br",null),i.a.createElement("input",{type:"checkbox",checked:this.state.separator,onChange:function(){return e.setState({separator:!e.state.separator})}})," ","Separator",i.a.createElement("br",null),i.a.createElement("input",{type:"checkbox",checked:this.state.handle,onChange:function(){return e.setState({handle:!e.state.handle})}})," ","Dropdown handle",i.a.createElement("br",null),i.a.createElement("input",{type:"checkbox",checked:this.state.forceOpen,onChange:function(){return e.setState({forceOpen:!e.state.forceOpen})}})," ","Stay open",i.a.createElement("br",null),"Dropdown Height: ",i.a.createElement("input",{type:"text",checked:this.state.dropdownHeight,value:this.state.dropdownHeight,onChange:function(t){return e.setState({dropdownHeight:t.target.value})}}),i.a.createElement("br",null),i.a.createElement("input",{type:"checkbox",checked:this.state.contentRenderer,onChange:function(){return e.setState({contentRenderer:!e.state.contentRenderer})}})," ","Custom content renderer",i.a.createElement("br",null),i.a.createElement("input",{type:"checkbox",checked:this.state.dropdownRenderer,onChange:function(){return e.setState({dropdownRenderer:!e.state.dropdownRenderer})}})," ","Custom dropdown renderer",i.a.createElement("br",null),i.a.createElement("input",{type:"checkbox",checked:this.state.itemRenderer,onChange:function(){return e.setState({itemRenderer:!e.state.itemRenderer})}})," ","Custom dropdown item renderer",i.a.createElement("br",null),i.a.createElement("input",{type:"checkbox",checked:this.state.keepSelectedInList,onChange:function(){return e.setState({keepSelectedInList:!e.state.keepSelectedInList})}})," ","Keep selected item in a list",i.a.createElement("br",null),i.a.createElement("input",{type:"checkbox",checked:this.state.closeOnSelect,onChange:function(){return e.setState({closeOnSelect:!e.state.closeOnSelect})}})," ","Close dropdown on select/deselect",i.a.createElement("br",null),i.a.createElement("input",{type:"color",defaultValue:this.state.color,onChange:function(t){return e.setState({color:t.target.value})}})," ","Custom color",i.a.createElement("br",null),"Search by field:"," ",i.a.createElement("select",{defaultValue:this.state.searchBy,onChange:function(t){return e.setState({searchBy:t.target.value})}},Object.keys(s.a[0]).map(function(e){return i.a.createElement("option",{key:e,value:e},e)})),i.a.createElement("br",null),"Label field:"," ",i.a.createElement("select",{defaultValue:this.state.labelField,onChange:function(t){return e.setState({labelField:t.target.value,searchBy:t.target.value})}},Object.keys(s.a[0]).map(function(e){return i.a.createElement("option",{key:e,value:e},e)})),i.a.createElement("br",null),"Value field:"," ",i.a.createElement("select",{defaultValue:this.state.valueField,onChange:function(t){return e.setState({valueField:t.target.value})}},Object.keys(s.a[0]).map(function(e){return i.a.createElement("option",{key:e,value:e},e)}))),i.a.createElement("details",null,i.a.createElement("summary",null,"Options:"),i.a.createElement("pre",null,JSON.stringify(s.a,!1,2))),i.a.createElement("details",null,i.a.createElement("summary",null,"Selected values:"),i.a.createElement("pre",null,JSON.stringify(this.state.selectValues,!1,2))))},t}(i.a.Component),k=Object(u.a)(d.a)(g(),function(e){return e.dropdownRenderer&&"\n\t\t.react-dropdown-select-dropdown {\n\t\t\toverflow: initial;\n\t\t}\n\t"}),x=u.a.div(E(),function(e){return e.color}),y=u.a.div(b()),S=u.a.div(f(),function(e){return e.disabled?"\n  \topacity: 0.5;\n  \tpointer-events: none;\n  \tcursor: not-allowed;\n  ":""}),R=u.a.div(m()),w=u.a.div(h()),C=u.a.button(p());t.default=v},163:function(e,t,n){var r=n(28),a=n(37);n(164)("keys",function(){return function(e){return a(r(e))}})},164:function(e,t,n){var r=n(12),a=n(19),l=n(26);e.exports=function(e,t){var n=(a.Object||{})[e]||Object[e],o={};o[e]=t(n),r(r.S+r.F*l(function(){n(1)}),"Object",o)}}}]);
//# sourceMappingURL=component---src-pages-demo-js-6e8290b91acdfc075c19.js.map