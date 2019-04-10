/*
user는 매칭을 눌렀을 때 matchMaking 배열에 들어간다.
matchMaking 배열은 실시간으로 팀벨런스를 맞추기 위한 수치를 계산해야한다.
배열의 인원이 꽉 차고 비슷한 수치는 게임을 시작한다.
*/
matchMaking_1[6] = {"user1","user2", "user4", "", "", ""};
matchMaking_2[6] = {"user5","user6", "", "", "", ""};
matchMaking_3[6] = {"user7","user8", "user9", "user10", "", ""};

/*
user가 matching을 클릭했을 때 빈 배열방 찾기
방의 평균 티어를 계산해서 들어가야한다.
브론즈 티어가 있는 방에 플래티넘이 들어가는건 이상함.
방이 없으면 배열을 생성해서 그 방의 첫번째 기준이 됨.
*/


/*
user가 matching 배열에 들어갔을 때,
Level과 tier 평균 수치 계산하기.
(Level과 tier를 나눌지 같이할지 생각해봐야함.)
*/

/*
user가 matching 중 취소를 눌렀을 때
다시 팀벨런스 계산을 고려해야됨.
*/
