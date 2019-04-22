<script>
  export default {
    name: 'ColRender',
    functional: true, // 函数式组件
    props: {
      row: Object,
      render: Function,
      index: Number,
      column: {
        type: Object,
        default: () => ({})
      }
    },
    render (h, ctx) {
      const { row, index, column, render } = ctx.props;
      return render({ row, index, column });
    }
  };
</script>

<style scoped>

</style>
