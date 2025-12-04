/*
 * @Author: djw
 * @Description: 
 */

$('.open').click(function(){
  $('#bottomModal').removeClass('none').removeClass('modalHide').addClass('show')
  $(this).addClass('none')
  $('.close').removeClass('none')
  document.body.style.overflow = 'hidden'; // 禁止滚动
  document.body.style.top = `-${window.scrollY}px`;
})

$('.close').click(function(){
  $('#bottomModal').removeClass('show').addClass('modalHide')
  $(this).addClass('none')
  $('.open').removeClass('none')
  const timer = setTimeout(() => {
    $('#bottomModal').addClass('none')
    clearTimeout(timer)
    // 恢复滚动位置
    document.body.style.overflow = '';
    const scrollY = document.body.style.top;
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }, 300)
})
