<template>
  <div class="editor">
    <div ref="editor">
    </div>
    <button @click="getContent">查看内容</button>
  </div>
</template>

<script>
  /**
   * 富文本的常用功能：
   *  1. 输入内容：a.获取值 b.设置值 c.非空校验 d.禁用
   *  2. 上传图片：可能要自己通过formData来进行图片上传
   *      a. 上传前判断：1.格式，2.大小
   *      b. 上传成功
   *      c. 提示：1. 上传成功 2.上传失败 3.格式，大小不符合要求
   */
  import Editor from 'wangeditor';

  export default {
    name: 'AdminEditor',
    model: {
      prop: 'editorContent',
      event: 'input'
    },
    props: {
      editorContent: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      uploadProps: {
        type: Object,
        default: () => ({ filename: 'file' })
      }
    },
    data () {
      return {
        editor: null
      };
    },
    watch: {
      editorContent: {
        handler (newVal) {
          this.$nextTick(() => {
            if (this.editor) {
              this.editor.txt.html(newVal);
            }
          });
        },
        immediate: true
      },
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
        this.showImgTab(editor);
        // editor.customConfig.customUploadImg = this.uploadImg;
        editor.customConfig.onchange = (html) => {
          this.$emit('input', html);
        };
        // 更新不及时会导致双向数据绑定出问题
        editor.customConfig.onchangeTimeout = 20;
        editor.create();
        this.editor = editor;
        if (this.disabled) {
          editor.$textElem.attr('contenteditable', false);
        }
      },
      showImgTab (editor) {
        // 隐藏“网络图片”tab
        editor.customConfig.showLinkImg = false;
        // 上传图片到服务器
        editor.customConfig.uploadImgServer = '/upload';
      },
      // uploadImg (files, insert) {
      //
      // },
      // beforeUpload (files) {
      //
      // }
    }
  };
</script>

<style lang="scss" scoped>
</style>
