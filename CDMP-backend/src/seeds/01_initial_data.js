const bcrypt = require("bcrypt");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Clear existing entries
  await knex('notifications').del();
  await knex('status_history').del();
  await knex('complaints').del();
  await knex('prizes').del();
  await knex('users').del();

  // Hash password for all users
  const hashedPassword = await bcrypt.hash("password123", 10);

  // Insert users
  const users = await knex('users').insert([
    {
      id: 1,
      username: 'johndoe',
      display_name: 'John Doe',
      email: 'john@example.com',
      password: hashedPassword,
      avatar_uri: 'https://i.pravatar.cc/150?img=12',
      points: 2450,
      rank: 7,
      submissions_count: 18,
      shipping_address: '123 Main St, Apt 4B, New York, NY 10001'
    },
    {
      id: 101,
      username: 'cityheroes2025',
      display_name: 'Devam Desai',
      email: 'devam@example.com',
      password: hashedPassword,
      avatar_uri: 'https://i.pravatar.cc/150?img=1',
      points: 5240,
      rank: 1,
      submissions_count: 42
    },
    {
      id: 102,
      username: 'fixitfrank',
      display_name: 'Gaurav Mishra',
      email: 'gaurav@example.com',
      password: hashedPassword,
      avatar_uri: 'https://i.pravatar.cc/150?img=3',
      points: 4890,
      rank: 2,
      submissions_count: 38
    },
    {
      id: 103,
      username: 'communitywatch',
      display_name: 'Mahalaxmi Bhagawati',
      email: 'mahalaxmi@example.com',
      password: hashedPassword,
      avatar_uri: 'https://i.pravatar.cc/150?img=5',
      points: 4120,
      rank: 3,
      submissions_count: 35
    },
    {
      id: 104,
      username: 'streetpatrol',
      display_name: 'Michael Brown',
      email: 'michael@example.com',
      password: hashedPassword,
      avatar_uri: 'https://i.pravatar.cc/150?img=7',
      points: 3650,
      rank: 4,
      submissions_count: 29
    },
    {
      id: 105,
      username: 'infrastructurepro',
      display_name: 'Lisa Anderson',
      email: 'lisa@example.com',
      password: hashedPassword,
      avatar_uri: 'https://i.pravatar.cc/150?img=9',
      points: 3210,
      rank: 5,
      submissions_count: 26
    },
    {
      id: 106,
      username: 'civicguardian',
      display_name: 'David Wilson',
      email: 'david@example.com',
      password: hashedPassword,
      avatar_uri: 'https://i.pravatar.cc/150?img=11',
      points: 2890,
      rank: 6,
      submissions_count: 22
    },
    {
      id: 107,
      username: 'reportmaster',
      display_name: 'Jessica Lee',
      email: 'jessica@example.com',
      password: hashedPassword,
      avatar_uri: 'https://i.pravatar.cc/150?img=13',
      points: 2180,
      rank: 8,
      submissions_count: 17
    }
  ]).returning('*');

  // Insert complaints
  await knex('complaints').insert([
    {
      id: 1,
      user_id: 1,
      title: 'Pothole on Main Street',
      description: 'Large pothole on Main Street causing traffic issues',
      image_uri: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400',
      category: 'Road Maintenance',
      status: 'completed',
      points: 150,
      department: 'Public Works Department',
      ai_categorized: true,
      location: 'Main Street',
      submitted_date: new Date('2025-10-15'),
      created_at: new Date('2025-10-15')
    },
    {
      id: 2,
      user_id: 1,
      title: 'Broken Street Light',
      description: 'Broken street light at Park Avenue intersection',
      image_uri: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400',
      category: 'Street Lighting',
      status: 'in-progress',
      points: 100,
      department: 'Utilities Department',
      ai_categorized: true,
      location: 'Park Avenue',
      submitted_date: new Date('2025-10-28'),
      created_at: new Date('2025-10-28')
    },
    {
      id: 3,
      user_id: 1,
      title: 'Graffiti on Public Building',
      description: 'Graffiti on public building wall',
      image_uri: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400',
      category: 'Vandalism',
      status: 'received',
      points: 75,
      department: 'City Maintenance',
      ai_categorized: true,
      location: 'City Hall',
      submitted_date: new Date('2025-11-02'),
      created_at: new Date('2025-11-02')
    },
    {
      id: 4,
      user_id: 1,
      title: 'Water Leak',
      description: 'Water leak from fire hydrant',
      image_uri: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=400',
      category: 'Water Infrastructure',
      status: 'submitted',
      points: 125,
      ai_categorized: true,
      location: '5th Avenue',
      submitted_date: new Date('2025-11-04'),
      created_at: new Date('2025-11-04')
    }
  ]);

  // Insert status history
  await knex('status_history').insert([
    { complaint_id: 1, status: 'submitted', date: new Date('2025-10-15') },
    { complaint_id: 1, status: 'received', department: 'Public Works Department', date: new Date('2025-10-16') },
    { complaint_id: 1, status: 'in-progress', date: new Date('2025-10-18') },
    { complaint_id: 1, status: 'completed', date: new Date('2025-10-25') },
    { complaint_id: 2, status: 'submitted', date: new Date('2025-10-28') },
    { complaint_id: 2, status: 'received', department: 'Utilities Department', date: new Date('2025-10-29') },
    { complaint_id: 2, status: 'in-progress', date: new Date('2025-11-01') },
    { complaint_id: 3, status: 'submitted', date: new Date('2025-11-02') },
    { complaint_id: 3, status: 'received', department: 'City Maintenance', date: new Date('2025-11-03') },
    { complaint_id: 4, status: 'submitted', date: new Date('2025-11-04') }
  ]);

  // Insert prizes
  await knex('prizes').insert([
    {
      title: '$10 Amazon Gift Card',
      description: 'Redeem your points for a $10 Amazon gift card',
      image_uri: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=400',
      point_cost: 1000,
      category: 'Gift Cards',
      available: true
    },
    {
      title: '$25 Amazon Gift Card',
      description: 'Redeem your points for a $25 Amazon gift card',
      image_uri: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=400',
      point_cost: 2500,
      category: 'Gift Cards',
      available: true
    },
    {
      title: 'City Hall Tour',
      description: 'Exclusive tour of City Hall with the mayor',
      image_uri: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400',
      point_cost: 500,
      category: 'Experiences',
      available: true
    },
    {
      title: 'Community Hero T-Shirt',
      description: 'Official Community Hero branded t-shirt',
      image_uri: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
      point_cost: 300,
      category: 'Merchandise',
      available: true
    },
    {
      title: '$50 Restaurant Voucher',
      description: 'Dine at any participating local restaurant',
      image_uri: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400',
      point_cost: 3500,
      category: 'Gift Cards',
      available: true
    },
    {
      title: 'Movie Theater Tickets',
      description: 'Two tickets to any local theater',
      image_uri: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400',
      point_cost: 800,
      category: 'Entertainment',
      available: true
    }
  ]);

  // Insert notifications
  await knex('notifications').insert([
    {
      user_id: 1,
      title: 'Submission Completed',
      message: 'Your pothole report on Main Street has been completed!',
      type: 'success',
      complaint_id: 1,
      date: new Date('2025-10-25')
    },
    {
      user_id: 1,
      title: 'Points Earned',
      message: 'You earned 150 points for your completed submission!',
      type: 'success',
      date: new Date('2025-10-25')
    },
    {
      user_id: 1,
      title: 'Submission In Progress',
      message: 'Your street light report is now being worked on by the Utilities Department.',
      type: 'info',
      complaint_id: 2,
      date: new Date('2025-11-01')
    }
  ]);

  console.log('Seed data inserted successfully!');
};
