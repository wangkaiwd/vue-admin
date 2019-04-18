<template>
  <el-table
    class="edit-table"
    :data="copyData"
    style="width: 100%">
    <!--  v-bind:相当于将对象中的每个属性都分别绑定到组件上，相当于rect中的扩展运算符  -->
    <el-table-column
      v-for="item in editColumns"
      :prop="item.prop"
      :label="item.label"
      :width="item.width"
      :key="item.prop"
    >
      <template #default="{row,column,$index}">
        <col-render
          v-if="item.render"
          :render="item.render"
          :column="item"
          :row="row"
          :index="$index"
        >
        </col-render>
        <span v-else>
            {{row[item.prop]}}
          </span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script type="text/jsx">
  import ColRender from './colRender';
  // FIXME: 这里使用index来进行更新数组会不会有问题
  export default {
    name: 'EditTable',
    components: { ColRender },
    props: {
      columns: { type: Array, default: () => [] },
      tableData: { type: Array, default: () => [] }
    },
    data () {
      return {
        copyData: JSON.parse(JSON.stringify(this.tableData)),
        editIds: [],
      };
    },
    computed: {
      editColumns () {
        return this.generateEditColumns();
      }
    },
    methods: {
      onInput ({ row, column, index }, newValue) {
        this.copyData[index][column.prop] = newValue;
      },
      onClick ({ row, column, index }, newValue) {
        const i = this.editIds.indexOf(`${column.prop}_${index}`);
        const { required = true } = column.editable;
        if (i === -1) {
          return this.editIds.push(`${column.prop}_${index}`);
        }
        if (!newValue && newValue !== 0 && required) return this.$message.warning('内容不能为空');
        this.editIds.splice(i, 1);
        this.$emit('update:table-data', this.copyData);
        // 暴露编辑完成事件，将修改的信息传回
        this.$emit('edit-ok', { row, column, index, newValue });
      },
      onBlur () {

      },
      generateEditColumns () {
        const editColumns = this.columns.map(col => {
          if ('editable' in col) {
            const { widget, trigger, ...rest } = col.editable;
            const render = (h, { row, column, index }) => {
              const isEditing = this.editIds.includes(`${column.prop}_${index}`);
              return (
                <div class="edit-col">
                  {
                    isEditing
                      ?
                      <col.editable.widget
                        value={row[column.prop]}
                        on-input={this.onInput.bind(this, { row, column, index })}
                        {...{ attrs: rest }}
                      >
                      </col.editable.widget>
                      :
                      <span>{row[column.prop]}</span>
                  }

                  <el-button
                    on-click={this.onClick.bind(this, { row, column, index }, row[column.prop])}
                    class="edit-button"
                  >
                    {isEditing ? '保存' : '编辑'}
                  </el-button>
                </div>
              );
            };
            return { ...col, render };
          }
          return col;
        });
        return editColumns;
      },
    }
  };
</script>

<style lang="scss" scoped>
  .edit-table {
    /deep/ .edit-col {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
