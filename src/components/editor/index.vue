<template>
  <div class="editor">
    <div ref="editor"></div>
    <button @click="getContent">查看内容</button>
  </div>
</template>

<script>
  /**
   * 富文本的常用功能：
   *  1. 输入内容：a.获取值 b.设置值 c.非空校验 d.禁用
   *  2. 上传图片：可能要自己通过formData来进行图片上传
   */
  import Editor from 'wangeditor';

  export default {
    name: 'AdminEditor',
    model: {
      prop: 'editorContent',
      event: 'change'
    },
    props: {
      editorContent: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        editor: {}
      };
    },
    watch: {
      editorContent (newVal) {
        if (this.editor) {
          this.editor.txt.html(newVal);
        }
      }
    },
    mounted () {
      this.initEditor();
    },
    methods: {
      getContent () {
        alert(this.editorContent);
      },
      initEditor () {
        const editor = new Editor(this.$refs.editor);
        if (this.disabled) { // 禁用配置菜单置空
          editor.customConfig.menus = [];
        }
        editor.customConfig.onchange = (html) => {
          this.$emit('change', html);
        };
        editor.create();
        editor.txt.html(this.editorContent);
        this.editor = editor;
        if (this.disabled) {
          editor.$textElem.attr('contenteditable', false);
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>
