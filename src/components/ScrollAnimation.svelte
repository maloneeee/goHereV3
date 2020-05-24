<style>
  .mouse {
    position: fixed;
    width: 60px;
    height: 110px;
    left: 50%;
    bottom: 10vh;
    transform:translateX(-50%);
    border: 8px solid white;
    box-sizing: border-box;
    border-radius: 35px;
    display: flex;
    flex-direction: row;
    /* padding: 5px 15px; */
    z-index: 999999999999999999999;
    align-self: flex-start;
    justify-content:center;
  }

  .dot {
    
    margin: 10px 0px;
    background: white;
    border-radius: 50%;
    width: 8px;
    height: 15px;
    animation: scrollDot 2s ease-in-out infinite;
  }
  @keyframes scrollDot {
    0% {
        margin-top:20px;
        height: 18px;
    }
    50% {
        margin-top:15px;
        height: 28px;
    }
    100% {
        margin-top:20px;
        height: 18px;
    }
  }
</style>

<div class="mouse">
  <div class="dot" />
</div>
