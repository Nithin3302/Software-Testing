function getVisitorCount() {
  return localStorage.getItem('visitorCount') || '0';
}

function incrementVisitorCount() {
  let count = parseInt(getVisitorCount()) + 1;
  localStorage.setItem('visitorCount', count);
  return count;
}

module.exports = { getVisitorCount, incrementVisitorCount };
