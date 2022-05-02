function solution(id_list, report, k) {
    // key:신고 당한 사람, value:신고한 사람
    const reportedPerson = new Map();
    // key:신고한 사람, value:신고 당한 사람
    const reportPerson = new Map();
    
    report.forEach(_report => {
        const [person, reporter] = _report.split(' ');
        
        if(reportPerson.has(person)) reportPerson.get(person).add(reporter);
        else reportPerson.set(person, new Set([reporter]));
        
        if(reportedPerson.has(reporter)) reportedPerson.get(reporter).add(person);
        else reportedPerson.set(reporter, new Set([person]));
    });
    
    const answer = id_list.map(id => {
        let ret = 0;
        const reports = reportPerson.get(id);
        
        if(!reports) return 0;
        
        reports.forEach(report => {
            if(reportedPerson.get(report).size >= k) ret++;
        });
        
        return ret;
    });
    
    return answer;
}
