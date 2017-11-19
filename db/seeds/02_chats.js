
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chats').del()
    .then(function () {
      // Inserts seed entries
      return knex('chats').insert([
        {
          sender_id: 24,
          receiver_id: 1},
        {
          sender_id: 12,
          receiver_id: 2},
        {
          sender_id: 22,
          receiver_id: 15},
        {
          sender_id: 26,
          receiver_id: 19},
        {
          sender_id: 1,
          receiver_id: 19},
        {
          sender_id: 38,
          receiver_id: 38},
        {
          sender_id: 43,
          receiver_id: 12},
        {
          sender_id: 42,
          receiver_id: 35},
        {
          sender_id: 12,
          receiver_id: 13},
        {
          sender_id: 3,
          receiver_id: 45},
        {
          sender_id: 7,
          receiver_id: 5},
        {
          sender_id: 23,
          receiver_id: 38},
        {
          sender_id: 18,
          receiver_id: 47},
        {
          sender_id: 21,
          receiver_id: 6},
        {
          sender_id: 25,
          receiver_id: 39},
        {
          sender_id: 20,
          receiver_id: 39},
        {
          sender_id: 24,
          receiver_id: 7},
        {
          sender_id: 17,
          receiver_id: 26},
        {
          sender_id: 43,
          receiver_id: 38},
        {
          sender_id: 40,
          receiver_id: 9},
        {
          sender_id: 17,
          receiver_id: 12},
        {
          sender_id: 23,
          receiver_id: 20},
        {
          sender_id: 28,
          receiver_id: 12},
        {
          sender_id: 16,
          receiver_id: 48},
        {
          sender_id: 21,
          receiver_id: 4},
        {
          sender_id: 47,
          receiver_id: 36},
        {
          sender_id: 38,
          receiver_id: 13},
        {
          sender_id: 27,
          receiver_id: 1},
        {
          sender_id: 47,
          receiver_id: 37},
        {
          sender_id: 27,
          receiver_id: 18},
        {
          sender_id: 44,
          receiver_id: 23},
        {
          sender_id: 28,
          receiver_id: 33},
        {
          sender_id: 37,
          receiver_id: 28},
        {
          sender_id: 38,
          receiver_id: 30},
        {
          sender_id: 14,
          receiver_id: 12},
        {
          sender_id: 12,
          receiver_id: 22},
        {
          sender_id: 20,
          receiver_id: 50},
        {
          sender_id: 10,
          receiver_id: 32},
        {
          sender_id: 8,
          receiver_id: 25},
        {
          sender_id: 9,
          receiver_id: 6},
        {
          sender_id: 33,
          receiver_id: 41},
        {
          sender_id: 34,
          receiver_id: 43},
        {
          sender_id: 17,
          receiver_id: 28},
        {
          sender_id: 46,
          receiver_id: 22},
        {
          sender_id: 30,
          receiver_id: 3},
        {
          sender_id: 13,
          receiver_id: 46},
        {
          sender_id: 39,
          receiver_id: 9},
        {
          sender_id: 16,
          receiver_id: 25},
        {
          sender_id: 3,
          receiver_id: 19},
        {
          sender_id: 11,
          receiver_id: 47}])
    })
}
