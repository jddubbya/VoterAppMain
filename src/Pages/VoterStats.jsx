const VoterStats = () => {
    return(      
      <>
        <script src="
            https://cdn.jsdelivr.net/npm/easy-pie-chart@2.1.7/dist/jquery.easypiechart.min.js
        "></script>
        <div class="chart" data-percent="73">73%</div>
        <script src="/path/to/easy-pie-chart.js"></script>
        <script>
            var element = document.querySelector('.chart');
            new EasyPieChart(element, {
                // your options goes here
            });
</script>
    
      
      <p>PRIVACY POLICY GOES HERE</p>
      </>
    )
    }
    
    export default VoterStats