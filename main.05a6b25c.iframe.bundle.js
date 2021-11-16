(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{2318:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(160).configure)([__webpack_require__(2319)],module,!1)}).call(this,__webpack_require__(193)(module))},2319:function(module,exports,__webpack_require__){var map={"./stories/breadcrumb.stories.tsx":432,"./stories/list-item.stories.tsx":433,"./stories/skeleton.stories.tsx":434,"./stories/table.stories.tsx":435};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=2319},283:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(0);var _storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(160),_theme_ui_preset_base__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(456),theme_ui__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2323),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(10);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)((function(story){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_3__.a,{theme:_theme_ui_preset_base__WEBPACK_IMPORTED_MODULE_2__.a,children:story()})})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.configure)([__webpack_require__(828)],module)}.call(this,__webpack_require__(336)(module))},432:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Normal",(function(){return breadcrumb_stories_Normal}));var objectSpread2=__webpack_require__(6),react=__webpack_require__(0),react_default=__webpack_require__.n(react),theme_ui_components_esm=__webpack_require__(2329),jsx_runtime=__webpack_require__(10),Breadcrumb=react_default.a.forwardRef((function(props,ref){return Object(jsx_runtime.jsx)(theme_ui_components_esm.a,Object(objectSpread2.a)(Object(objectSpread2.a)({ref:ref,variant:"primary"},props),{},{__themeKey:"breadcrumb",children:props.items.map((function(item,k){var isLast=k===props.items.length-1;return Object(jsx_runtime.jsxs)(theme_ui_components_esm.a,{sx:{color:isLast?"primary":"inherit",display:"inline-block"},children:[item.href?Object(jsx_runtime.jsx)(theme_ui_components_esm.f,{href:item.href,sx:{textDecoration:"none",color:isLast?"primary":"inherit"},children:item.name}):item.name,!isLast&&Object(jsx_runtime.jsx)(theme_ui_components_esm.a,{sx:{display:"inline-block",mx:2,color:"muted"},children:"/"})]},k)}))}))}));try{Breadcrumb.displayName="Breadcrumb",Breadcrumb.__docgenInfo={description:"",displayName:"Breadcrumb",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ href?: string | undefined; name: ReactNode; }[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/breadcrumb.tsx#Breadcrumb"]={docgenInfo:Breadcrumb.__docgenInfo,name:"Breadcrumb",path:"src/breadcrumb.tsx#Breadcrumb"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Breadcrumb",component:Breadcrumb,parameters:{actions:{argTypesRegex:"^on.*"}}};var breadcrumb_stories_Normal=function Normal(props){return Object(jsx_runtime.jsx)(Breadcrumb,Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{items:[{href:"/settings/department",name:"Department"},{name:"Add new department"}]}))};breadcrumb_stories_Normal.parameters=Object(objectSpread2.a)({storySource:{source:"(props) => (\n  <Breadcrumb\n    {...props}\n    items={[\n      {\n        href: '/settings/department',\n        name: 'Department',\n      },\n      {\n        name: 'Add new department',\n      },\n    ]}\n  />\n)"}},breadcrumb_stories_Normal.parameters);try{breadcrumb_stories_Normal.displayName="Normal",breadcrumb_stories_Normal.__docgenInfo={description:"",displayName:"Normal",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/breadcrumb.stories.tsx#Normal"]={docgenInfo:breadcrumb_stories_Normal.__docgenInfo,name:"Normal",path:"src/stories/breadcrumb.stories.tsx#Normal"})}catch(__react_docgen_typescript_loader_error){}},433:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"withText",(function(){return list_item_stories_withText})),__webpack_require__.d(__webpack_exports__,"withButton",(function(){return list_item_stories_withButton})),__webpack_require__.d(__webpack_exports__,"withOnClick",(function(){return list_item_stories_withOnClick}));var objectSpread2=__webpack_require__(6),react=__webpack_require__(0),react_default=__webpack_require__.n(react),theme_ui_components_esm=__webpack_require__(2329),jsx_runtime=__webpack_require__(10),ListItem=react_default.a.forwardRef((function(props,ref){return Object(jsx_runtime.jsx)(theme_ui_components_esm.a,Object(objectSpread2.a)(Object(objectSpread2.a)({ref:ref,variant:"primary"},props),{},{__themeKey:"list",__css:{lineHeight:"inherit",textDecoration:"none",fontSize:"inherit",p:3,border:3,borderStyle:"solid",borderColor:"muted",borderRadius:4,transition:"border 150ms ease-out",cursor:props.onClick?"pointer":null,":hover":props.onClick?{borderColor:"primary"}:null}}))}));try{ListItem.displayName="ListItem",ListItem.__docgenInfo={description:"",displayName:"ListItem",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/list-item.tsx#ListItem"]={docgenInfo:ListItem.__docgenInfo,name:"ListItem",path:"src/list-item.tsx#ListItem"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"ListItem",component:ListItem,parameters:{actions:{argTypesRegex:"^on.*"}}};var list_item_stories_withText=function withText(props){return Object(jsx_runtime.jsx)(ListItem,Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{children:"This is a list element"}))},list_item_stories_withButton=function withButton(props){return Object(jsx_runtime.jsx)(ListItem,Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{children:Object(jsx_runtime.jsxs)(theme_ui_components_esm.d,{sx:{justifyContent:"space-between",alignItems:"center"},children:[Object(jsx_runtime.jsx)(theme_ui_components_esm.g,{children:"This is a list element"}),Object(jsx_runtime.jsx)(theme_ui_components_esm.b,{children:"Go there"})]})}))},list_item_stories_withOnClick=function withOnClick(props){return Object(jsx_runtime.jsx)(ListItem,Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{onClick:function onClick(){return alert("Clicked it!")},children:"This is clickable!"}))};list_item_stories_withText.parameters=Object(objectSpread2.a)({storySource:{source:"(props) => (\n  <ListItem {...props}>This is a list element</ListItem>\n)"}},list_item_stories_withText.parameters),list_item_stories_withButton.parameters=Object(objectSpread2.a)({storySource:{source:"(props) => (\n  <ListItem {...props}>\n    <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>\n      <Text>This is a list element</Text>\n      <Button>Go there</Button>\n    </Flex>\n  </ListItem>\n)"}},list_item_stories_withButton.parameters),list_item_stories_withOnClick.parameters=Object(objectSpread2.a)({storySource:{source:"(props) => (\n  <ListItem {...props} onClick={() => alert('Clicked it!')}>\n    This is clickable!\n  </ListItem>\n)"}},list_item_stories_withOnClick.parameters);try{list_item_stories_withText.displayName="withText",list_item_stories_withText.__docgenInfo={description:"",displayName:"withText",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/list-item.stories.tsx#withText"]={docgenInfo:list_item_stories_withText.__docgenInfo,name:"withText",path:"src/stories/list-item.stories.tsx#withText"})}catch(__react_docgen_typescript_loader_error){}try{list_item_stories_withButton.displayName="withButton",list_item_stories_withButton.__docgenInfo={description:"",displayName:"withButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/list-item.stories.tsx#withButton"]={docgenInfo:list_item_stories_withButton.__docgenInfo,name:"withButton",path:"src/stories/list-item.stories.tsx#withButton"})}catch(__react_docgen_typescript_loader_error){}try{list_item_stories_withOnClick.displayName="withOnClick",list_item_stories_withOnClick.__docgenInfo={description:"",displayName:"withOnClick",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/list-item.stories.tsx#withOnClick"]={docgenInfo:list_item_stories_withOnClick.__docgenInfo,name:"withOnClick",path:"src/stories/list-item.stories.tsx#withOnClick"})}catch(__react_docgen_typescript_loader_error){}},434:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"primary",(function(){return skeleton_stories_primary})),__webpack_require__.d(__webpack_exports__,"simpleLayout",(function(){return skeleton_stories_simpleLayout})),__webpack_require__.d(__webpack_exports__,"textShape",(function(){return skeleton_stories_textShape})),__webpack_require__.d(__webpack_exports__,"circleShape",(function(){return skeleton_stories_circleShape})),__webpack_require__.d(__webpack_exports__,"rectagularShape",(function(){return skeleton_stories_rectagularShape})),__webpack_require__.d(__webpack_exports__,"cardLoading",(function(){return skeleton_stories_cardLoading})),__webpack_require__.d(__webpack_exports__,"withThemeStyles",(function(){return skeleton_stories_withThemeStyles}));var objectSpread2=__webpack_require__(6),react=__webpack_require__(0),react_default=__webpack_require__.n(react),theme_ui_components_esm=__webpack_require__(2329),theme_ui_theme_provider_esm=__webpack_require__(2323),objectWithoutProperties=__webpack_require__(210),emotion_react_browser_esm=__webpack_require__(39),jsx_runtime=__webpack_require__(10),_excluded=["shape","size"],pulseKeyframe=Object(emotion_react_browser_esm.d)({"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}}),Skeleton=react_default.a.forwardRef((function(_ref,ref){var _ref$shape=_ref.shape,shape=void 0===_ref$shape?"text":_ref$shape,_ref$size=_ref.size,size=void 0===_ref$size?"1.2em":_ref$size,props=Object(objectWithoutProperties.a)(_ref,_excluded);return Object(jsx_runtime.jsx)(theme_ui_components_esm.a,Object(objectSpread2.a)(Object(objectSpread2.a)({ref:ref,variant:"primary"},props),{},{__themeKey:"skeleton",__css:{backgroundColor:"muted",height:"circular"===shape&&size,width:"circular"===shape&&size,borderRadius:"circular"===shape?"50%":4,transformOrigin:"text"===shape&&"0 55%",transform:"text"===shape&&"scale(1, 0.60)",animation:"".concat(pulseKeyframe," 1.5s ease-in-out 0.5s infinite"),"&:empty:before":{content:'"\\00a0"'}}}))}));try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Skeleton",props:{shape:{defaultValue:{value:"text"},description:"`circular` | `rectangular` | `text`",name:"shape",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"circular"'},{value:'"rectangular"'}]}},size:{defaultValue:{value:"1.2em"},description:"Use to set size of circular shape.",name:"size",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/skeleton.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Skeleton",component:Skeleton,parameters:{actions:{argTypesRegex:"^on.*"}}};var skeleton_stories_primary=function primary(props){return Object(jsx_runtime.jsx)(Skeleton,Object(objectSpread2.a)({},props))},skeleton_stories_simpleLayout=function simpleLayout(props){return Object(jsx_runtime.jsx)(theme_ui_components_esm.a,{children:Object(jsx_runtime.jsxs)(theme_ui_components_esm.d,{children:[Object(jsx_runtime.jsx)(Skeleton,Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{shape:"circular",size:"10rem"})),Object(jsx_runtime.jsxs)(theme_ui_components_esm.a,{sx:{width:"400px",mx:4},children:[Object(jsx_runtime.jsx)(Skeleton,Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{shape:"text",sx:{mb:2}})),Object(jsx_runtime.jsx)(Skeleton,Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{shape:"text",sx:{width:"80%"}}))]})]})})},skeleton_stories_textShape=function textShape(props){return Object(jsx_runtime.jsx)(Skeleton,Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{shape:"text"}))},skeleton_stories_circleShape=function circleShape(props){return Object(jsx_runtime.jsx)(Skeleton,Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{shape:"circular",size:48}))},skeleton_stories_rectagularShape=function rectagularShape(props){return Object(jsx_runtime.jsx)(Skeleton,Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{shape:"rectangular",sx:{width:200,height:400}}))},skeleton_stories_cardLoading=function cardLoading(props){return Object(jsx_runtime.jsx)(theme_ui_components_esm.a,{children:Object(jsx_runtime.jsxs)(theme_ui_components_esm.d,{sx:{gap:4},children:[Object(jsx_runtime.jsxs)(theme_ui_components_esm.c,{sx:{p:3,width:240,height:"auto",outline:"solid",outlineColor:"#",borderRadius:6},children:[Object(jsx_runtime.jsxs)(theme_ui_components_esm.d,{children:[Object(jsx_runtime.jsx)(theme_ui_components_esm.e,{as:"h2",children:"Card name"}),Object(jsx_runtime.jsx)(theme_ui_components_esm.a,{sx:{height:48,width:48,borderRadius:48,background:"#8fa4c8",ml:"auto",mr:1}})]}),Object(jsx_runtime.jsx)(theme_ui_components_esm.g,{children:"This is a text describing a person or something like that. We are retrieving this data form somewhere, which is why we want to write a loding component!"})]}),Object(jsx_runtime.jsxs)(theme_ui_components_esm.c,{sx:{p:3,width:240,height:"auto",outline:"solid",outlineColor:"#",borderRadius:6},children:[Object(jsx_runtime.jsxs)(theme_ui_components_esm.d,{children:[Object(jsx_runtime.jsx)(Skeleton,{sx:{width:"50%"}}),Object(jsx_runtime.jsx)(Skeleton,Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{shape:"circular",size:48,sx:{ml:"auto",mr:1}}))]}),Object(jsx_runtime.jsx)(Skeleton,{}),Object(jsx_runtime.jsx)(Skeleton,{}),Object(jsx_runtime.jsx)(Skeleton,{}),Object(jsx_runtime.jsx)(Skeleton,{})]})]})})},skeleton_stories_withThemeStyles=function withThemeStyles(props){return Object(jsx_runtime.jsx)(theme_ui_theme_provider_esm.a,{theme:{skeleton:{primary:{backgroundColor:"yellow"}}},children:Object(jsx_runtime.jsx)(Skeleton,Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{shape:"rectangular",sx:{width:500,height:500}}))})};skeleton_stories_primary.parameters=Object(objectSpread2.a)({storySource:{source:"props => <Skeleton {...props} />"}},skeleton_stories_primary.parameters),skeleton_stories_simpleLayout.parameters=Object(objectSpread2.a)({storySource:{source:'props => (\n  <Box>\n    <Flex>\n      <Skeleton {...props} shape="circular" size="10rem" />\n      <Box sx={{ width: \'400px\', mx: 4 }}>\n        <Skeleton {...props} shape="text" sx={{ mb: 2 }} />\n        <Skeleton {...props} shape="text" sx={{ width: \'80%\' }} />\n      </Box>\n    </Flex>\n  </Box>\n)'}},skeleton_stories_simpleLayout.parameters),skeleton_stories_textShape.parameters=Object(objectSpread2.a)({storySource:{source:'props => (\n  <Skeleton {...props} shape="text" />\n)'}},skeleton_stories_textShape.parameters),skeleton_stories_circleShape.parameters=Object(objectSpread2.a)({storySource:{source:'props => (\n  <Skeleton {...props} shape="circular" size={48} />\n)'}},skeleton_stories_circleShape.parameters),skeleton_stories_rectagularShape.parameters=Object(objectSpread2.a)({storySource:{source:'props => (\n  <Skeleton {...props} shape="rectangular" sx={{ width: 200, height: 400 }} />\n)'}},skeleton_stories_rectagularShape.parameters),skeleton_stories_cardLoading.parameters=Object(objectSpread2.a)({storySource:{source:"props => (\n  <Box>\n    <Flex sx={{ gap: 4 }}>\n      <Card\n        sx={{\n          p: 3,\n          width: 240,\n          height: 'auto',\n          outline: 'solid',\n          outlineColor: '#',\n          borderRadius: 6,\n        }}\n      >\n        <Flex>\n          <Heading as=\"h2\">Card name</Heading>\n          <Box\n            sx={{\n              height: 48,\n              width: 48,\n              borderRadius: 48,\n              background: '#8fa4c8',\n              ml: 'auto',\n              mr: 1,\n            }}\n          />\n        </Flex>\n        <Text>\n          This is a text describing a person or something like that. We are\n          retrieving this data form somewhere, which is why we want to write a\n          loding component!\n        </Text>\n      </Card>\n\n      <Card\n        sx={{\n          p: 3,\n          width: 240,\n          height: 'auto',\n          outline: 'solid',\n          outlineColor: '#',\n          borderRadius: 6,\n        }}\n      >\n        <Flex>\n          <Skeleton sx={{ width: '50%' }} />\n          <Skeleton\n            {...props}\n            shape=\"circular\"\n            size={48}\n            sx={{ ml: 'auto', mr: 1 }}\n          />\n        </Flex>\n        <Skeleton />\n        <Skeleton />\n        <Skeleton />\n        <Skeleton />\n      </Card>\n    </Flex>\n  </Box>\n)"}},skeleton_stories_cardLoading.parameters),skeleton_stories_withThemeStyles.parameters=Object(objectSpread2.a)({storySource:{source:"props => (\n  <ThemeProvider\n    theme={\n      {\n        skeleton: {\n          primary: {\n            backgroundColor: 'yellow',\n          },\n        },\n      } as Theme\n    }\n  >\n    <Skeleton {...props} shape=\"rectangular\" sx={{ width: 500, height: 500 }} />\n  </ThemeProvider>\n)"}},skeleton_stories_withThemeStyles.parameters);try{skeleton_stories_primary.displayName="primary",skeleton_stories_primary.__docgenInfo={description:"",displayName:"primary",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/skeleton.stories.tsx#primary"]={docgenInfo:skeleton_stories_primary.__docgenInfo,name:"primary",path:"src/stories/skeleton.stories.tsx#primary"})}catch(__react_docgen_typescript_loader_error){}try{skeleton_stories_simpleLayout.displayName="simpleLayout",skeleton_stories_simpleLayout.__docgenInfo={description:"",displayName:"simpleLayout",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/skeleton.stories.tsx#simpleLayout"]={docgenInfo:skeleton_stories_simpleLayout.__docgenInfo,name:"simpleLayout",path:"src/stories/skeleton.stories.tsx#simpleLayout"})}catch(__react_docgen_typescript_loader_error){}try{skeleton_stories_textShape.displayName="textShape",skeleton_stories_textShape.__docgenInfo={description:"",displayName:"textShape",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/skeleton.stories.tsx#textShape"]={docgenInfo:skeleton_stories_textShape.__docgenInfo,name:"textShape",path:"src/stories/skeleton.stories.tsx#textShape"})}catch(__react_docgen_typescript_loader_error){}try{skeleton_stories_circleShape.displayName="circleShape",skeleton_stories_circleShape.__docgenInfo={description:"",displayName:"circleShape",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/skeleton.stories.tsx#circleShape"]={docgenInfo:skeleton_stories_circleShape.__docgenInfo,name:"circleShape",path:"src/stories/skeleton.stories.tsx#circleShape"})}catch(__react_docgen_typescript_loader_error){}try{skeleton_stories_rectagularShape.displayName="rectagularShape",skeleton_stories_rectagularShape.__docgenInfo={description:"",displayName:"rectagularShape",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/skeleton.stories.tsx#rectagularShape"]={docgenInfo:skeleton_stories_rectagularShape.__docgenInfo,name:"rectagularShape",path:"src/stories/skeleton.stories.tsx#rectagularShape"})}catch(__react_docgen_typescript_loader_error){}try{skeleton_stories_cardLoading.displayName="cardLoading",skeleton_stories_cardLoading.__docgenInfo={description:"",displayName:"cardLoading",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/skeleton.stories.tsx#cardLoading"]={docgenInfo:skeleton_stories_cardLoading.__docgenInfo,name:"cardLoading",path:"src/stories/skeleton.stories.tsx#cardLoading"})}catch(__react_docgen_typescript_loader_error){}try{skeleton_stories_withThemeStyles.displayName="withThemeStyles",skeleton_stories_withThemeStyles.__docgenInfo={description:"",displayName:"withThemeStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/skeleton.stories.tsx#withThemeStyles"]={docgenInfo:skeleton_stories_withThemeStyles.__docgenInfo,name:"withThemeStyles",path:"src/stories/skeleton.stories.tsx#withThemeStyles"})}catch(__react_docgen_typescript_loader_error){}},435:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"WithText",(function(){return table_stories_WithText})),__webpack_require__.d(__webpack_exports__,"WithThemeStyles",(function(){return table_stories_WithThemeStyles}));var objectSpread2=__webpack_require__(6),emotion_element_a8309070_browser_esm=__webpack_require__(52),faker=__webpack_require__(142),react=__webpack_require__(0),react_default=__webpack_require__.n(react),objectWithoutProperties=__webpack_require__(210),react_table=__webpack_require__(458),theme_ui_components_esm=__webpack_require__(2329),jsx_runtime=__webpack_require__(10),_excluded=["withHeader"],Table=react_default.a.forwardRef((function(props,ref){var withHeader=props.withHeader,tableOptions=Object(objectWithoutProperties.a)(props,_excluded),_useTable=Object(react_table.useTable)(tableOptions),getTableProps=_useTable.getTableProps,getTableBodyProps=_useTable.getTableBodyProps,prepareRow=_useTable.prepareRow,_useTable$headerGroup=_useTable.headerGroups,headerGroups=void 0===_useTable$headerGroup?[]:_useTable$headerGroup,_useTable$rows=_useTable.rows,rows=void 0===_useTable$rows?[]:_useTable$rows;return Object(jsx_runtime.jsxs)(theme_ui_components_esm.a,Object(objectSpread2.a)(Object(objectSpread2.a)({ref:ref},getTableProps()),{},{as:"table",__themeKey:"table",__css:{borderSpacing:"0 15px"},variant:"primary",children:[withHeader&&Object(jsx_runtime.jsx)("thead",{children:headerGroups.map((function(headerGroup,i){return Object(react.createElement)("tr",Object(objectSpread2.a)(Object(objectSpread2.a)({},headerGroup.getHeaderGroupProps()),{},{key:i}),headerGroup.headers.map((function(column,i){return Object(react.createElement)(theme_ui_components_esm.a,Object(objectSpread2.a)(Object(objectSpread2.a)({as:"th",__css:{textAlign:"left",px:2}},column.getHeaderProps()),{},{key:i}),column.render("Header"))})))}))}),Object(jsx_runtime.jsx)(theme_ui_components_esm.a,Object(objectSpread2.a)(Object(objectSpread2.a)({as:"tbody"},getTableBodyProps()),{},{children:rows.map((function(row,i){return prepareRow(row),Object(react.createElement)(theme_ui_components_esm.a,Object(objectSpread2.a)(Object(objectSpread2.a)({as:"tr"},row.getRowProps()),{},{key:i,__css:{cursor:row.original.onClick?"pointer":null},onClick:row.original.onClick}),row.cells.map((function(cell,i){return Object(react.createElement)(theme_ui_components_esm.a,Object(objectSpread2.a)(Object(objectSpread2.a)({as:"td"},cell.getCellProps()),{},{key:i,__css:{p:2}}),cell.render("Cell"))})))}))}))]}))}));try{Table.displayName="Table",Table.__docgenInfo={description:"",displayName:"Table",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"TableData<any>[]"}},initialState:{defaultValue:null,description:"",name:"initialState",required:!1,type:{name:"Partial<TableState<TableData<any>>>"}},stateReducer:{defaultValue:null,description:"",name:"stateReducer",required:!1,type:{name:"((newState: TableState<TableData<any>>, action: ActionType, previousState: TableState<TableData<any>>, instance?: TableInstance<TableData<...>>) => TableState<...>)"}},useControlledState:{defaultValue:null,description:"",name:"useControlledState",required:!1,type:{name:"((state: TableState<TableData<any>>, meta: MetaBase<TableData<any>>) => TableState<TableData<any>>)"}},defaultColumn:{defaultValue:null,description:"",name:"defaultColumn",required:!1,type:{name:"Partial<Column<TableData<any>>>"}},getSubRows:{defaultValue:null,description:"",name:"getSubRows",required:!1,type:{name:"((originalRow: TableData<any>, relativeIndex: number) => TableData<any>[])"}},getRowId:{defaultValue:null,description:"",name:"getRowId",required:!1,type:{name:"((originalRow: TableData<any>, relativeIndex: number, parent?: Row<TableData<any>>) => string)"}},autoResetHiddenColumns:{defaultValue:null,description:"",name:"autoResetHiddenColumns",required:!1,type:{name:"boolean"}},withHeader:{defaultValue:null,description:"",name:"withHeader",required:!1,type:{name:"boolean"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"Column<TableData<any>>[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/table.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:"src/table.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Table",component:Table,parameters:{actions:{argTypesRegex:"^on.*"}},args:{data:function range(len,fun){for(var arr=[],i=0;i<len;i++)arr.push(fun());return arr}(15,(function(){return{name:"".concat(faker.name.firstName()," ").concat(faker.name.lastName()),address:"".concat(faker.address.streetAddress(),", ").concat(faker.address.zipCode()," ").concat(faker.address.city())}}))||[]}};var table_stories_WithText=function WithText(props){return Object(jsx_runtime.jsx)(Table,Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{columns:[{Header:"Name",accessor:"name"},{Header:"Address",accessor:"address"}],withHeader:!0}))},table_stories_WithThemeStyles=function WithThemeStyles(props){return Object(jsx_runtime.jsx)(emotion_element_a8309070_browser_esm.c,{theme:{table:{primary:{width:"100%",borderRadius:3,">thead th":{fontWeight:"normal",textDecoration:"underline",bg:"primary",p:3}}}},children:Object(jsx_runtime.jsx)(Table,Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{columns:[{Header:"Name",accessor:"name"},{Header:"Address",accessor:"address"}],withHeader:!0}))})};table_stories_WithText.parameters=Object(objectSpread2.a)({storySource:{source:"(props) => {\n  return (\n    <Table\n      {...props}\n      columns={[\n        {\n          Header: 'Name',\n          accessor: 'name',\n        },\n        {\n          Header: 'Address',\n          accessor: 'address',\n        },\n      ]}\n      withHeader\n    />\n  );\n}"}},table_stories_WithText.parameters),table_stories_WithThemeStyles.parameters=Object(objectSpread2.a)({storySource:{source:"(props) => (\n  <ThemeProvider\n    theme={{\n      table: {\n        primary: {\n          width: '100%',\n          borderRadius: 3,\n          '>thead th': {\n            fontWeight: 'normal',\n            textDecoration: 'underline',\n            bg: 'primary',\n            p: 3,\n          },\n        },\n      },\n    }}\n  >\n    <Table\n      {...props}\n      columns={[\n        {\n          Header: 'Name',\n          accessor: 'name',\n        },\n        {\n          Header: 'Address',\n          accessor: 'address',\n        },\n      ]}\n      withHeader\n    />\n  </ThemeProvider>\n)"}},table_stories_WithThemeStyles.parameters);try{table_stories_WithText.displayName="WithText",table_stories_WithText.__docgenInfo={description:"",displayName:"WithText",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Record<string, string>[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/table.stories.tsx#WithText"]={docgenInfo:table_stories_WithText.__docgenInfo,name:"WithText",path:"src/stories/table.stories.tsx#WithText"})}catch(__react_docgen_typescript_loader_error){}try{table_stories_WithThemeStyles.displayName="WithThemeStyles",table_stories_WithThemeStyles.__docgenInfo={description:"",displayName:"WithThemeStyles",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Record<string, string>[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/table.stories.tsx#WithThemeStyles"]={docgenInfo:table_stories_WithThemeStyles.__docgenInfo,name:"WithThemeStyles",path:"src/stories/table.stories.tsx#WithThemeStyles"})}catch(__react_docgen_typescript_loader_error){}},478:function(module,exports,__webpack_require__){__webpack_require__(479),__webpack_require__(636),__webpack_require__(637),__webpack_require__(2320),__webpack_require__(2321),__webpack_require__(826),module.exports=__webpack_require__(2318)},546:function(module,exports){},637:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(160)},826:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _home_runner_work_kit_kit_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(143),_home_runner_work_kit_kit_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2322),_home_runner_work_kit_kit_node_modules_storybook_client_logger__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_home_runner_work_kit_kit_storybook_preview_tsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(283);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(_home_runner_work_kit_kit_storybook_preview_tsx__WEBPACK_IMPORTED_MODULE_3__).forEach((function(key){var value=_home_runner_work_kit_kit_storybook_preview_tsx__WEBPACK_IMPORTED_MODULE_3__[key];switch(key){case"args":case"argTypes":return _home_runner_work_kit_kit_node_modules_storybook_client_logger__WEBPACK_IMPORTED_MODULE_2__.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(_home_runner_work_kit_kit_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_0__.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(_home_runner_work_kit_kit_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_0__.d)(loader,!1)}));case"parameters":return Object(_home_runner_work_kit_kit_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_0__.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(_home_runner_work_kit_kit_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_0__.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(_home_runner_work_kit_kit_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_0__.b)(enhancer)}));case"render":return Object(_home_runner_work_kit_kit_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_1__.setGlobalRender)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(_home_runner_work_kit_kit_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_0__.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},828:function(module,exports,__webpack_require__){var map={"./stories/breadcrumb.stories.tsx":432,"./stories/list-item.stories.tsx":433,"./stories/skeleton.stories.tsx":434,"./stories/table.stories.tsx":435};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=828}},[[478,2,3]]]);