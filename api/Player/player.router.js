<<<<<<< HEAD
const {deleteFeedback, getFeedback, GetSessions,GetSessionPlayers,score_update,GetSessionCoach,getDataforValidation,check_op_score,matchPlayerBowl,deleteNewses,updatescore_notP,unmarked_players_marked,SpecSessionDetails,getPlayersToSessions,GetSessionss,getAllPlayersFS,checkAvailabilityForSession ,match,GetMatchPlayerss,update,Unmarked,updatescore,unmarked_players,marked,getTeam,unmarked_data,addTeamMatches,future,addTeam,addTeamMatchesDet,getTeamDetails,deleteTeam,CreateTeam,getAllPlayers,Attendance,feedback,performanceBowl,intro,performanceFld,performance,GetEvents,GetCouncelling,GetEventDetails,GetPayments,GetMatchCoach,GetMatchPlayers,GetRanking, giveFeedback} = require("./player.controller");
=======
const {GetSessions,GetSessionPlayers,score_update,addTeamToMatches,GetSessionCoach,getDataforValidation,check_op_score,matchPlayerBowl,deleteNewses,updatescore_notP,unmarked_players_marked,SpecSessionDetails,getPlayersToSessions,GetSessionss,getAllPlayersFS,checkAvailabilityForSession ,match,GetMatchPlayerss,update,Unmarked,updatescore,unmarked_players,marked,getTeam,unmarked_data,addTeamMatches,future,addTeam,addTeamMatchesDet,getTeamDetails,deleteTeam,CreateTeam,getAllPlayers,Attendance,feedback,performanceBowl,intro,performanceFld,performance,GetEvents,GetCouncelling,GetEventDetails,GetPayments,GetMatchCoach,GetMatchPlayers,GetRanking} = require("./player.controller");
>>>>>>> 2c94a255627692befad44da009dbad59b97d666d
const router = require("express").Router();

router.post("/match", match);
router.post("/session", GetSessions);
router.post("/sessions", GetSessionss);
router.post("/sessionDetails", GetSessionPlayers);
router.post("/sessionCoaches", GetSessionCoach);
router.post("/counceling", GetCouncelling);
router.post("/events", GetEvents);
router.post("/eventDetails", GetEventDetails);
router.post("/payments", GetPayments);
router.post("/matchCoach", GetMatchCoach);
router.post("/matchPlayer", GetMatchPlayers);
router.post("/matchPlayerBowl", matchPlayerBowl);
router.post("/matchPlayers", GetMatchPlayerss);
router.post("/Ranking", GetRanking);
router.post("/performance", performance);
router.post("/performanceBowl", performanceBowl);
router.post("/performanceFld", performanceFld);
router.post("/intro", intro);
router.post("/Attendance", Attendance);
router.post("/feedback", feedback);
router.post("/coach/getPlayers", getAllPlayers);
router.post("/coach/CreateTeam", CreateTeam);
router.post("/coach/getTeam", getTeam); 
router.post("/coach/getTeamDetails", getTeamDetails);
router.post("/coach/deleteTeam", deleteTeam);
router.post("/coach/addTeamToMatch", addTeamToMatches);
router.post("/coach/addTeamMatches", addTeamMatches);
router.post("/coach/addTeamMatchesDet", addTeamMatchesDet);
router.post("/coach/addTeam", addTeam);
router.post("/coach/future", future);
router.post("/coach/update", update);
router.post("/coach/Unmarked", Unmarked);
router.post("/coach/unmarked_data", unmarked_data);
router.post("/coach/unmarked_players", unmarked_players);
router.post("/coach/updatescore", updatescore);
router.post("/coach/updatescore_notP", updatescore_notP);
router.post("/coach/marked", marked);
router.post("/coach/getPlayersForSessions", getAllPlayersFS);
router.post("/coach/checkAvailabilityForSession", checkAvailabilityForSession);
router.post("/coach/deleteNewses", deleteNewses);
router.post("/coach/getPlayersToSessions", getPlayersToSessions);
router.post("/coach/SpecSessionDetails", SpecSessionDetails);
router.post("/coach/unmarked_players_marked", unmarked_players_marked);
router.post("/coach/check_op_score", check_op_score);
router.post("/coach/score_update", score_update);
router.post("/coach/getDataforValidation", getDataforValidation);
router.post("/giveFeedback", giveFeedback);
router.post("/getFeedback", getFeedback);
router.post("/deleteFeedback", deleteFeedback);

module.exports = router; 