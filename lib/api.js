

export const getThemes = () => {
  $.ajax({
    url: 'http://brickset.com/api/v2.asmx/getThemes',
    data: {
      apiKey: 'eZLk-YNeq-WVG0',
      userHash: '',
      query: '',
      theme: '',
      subtheme: '',
      setNumber: '',
      year: '',
      owned: '',
      wanted: '',
      orderBy: '',
      pageSize: '',
      pageNumber: 1,
      userName: ''
    }
  },
  (success) => {console.log('success'),
  (error) => {console.log('fail')}
  })
}

export const getSets = () => {

}
