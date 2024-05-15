import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import javax.swing.JOptionPane;

public class Student {

    public void createTable() {
        try {
            String url = "jdbc:mysql://localhost:3306/";

            String databaseName = "student";
            String userName = "root";
            String password = "root";

            Connection connection = DriverManager.getConnection(url + databaseName, userName, password);

            String query = "insert into student values(?, ?, ?);";

            PreparedStatement pst = connection.prepareStatement(query);
            pst.setInt(1, 4);
            pst.setString(2, "darshna");
            pst.setString(3, "darshnadr07@gmail.com");
            pst.execute();
            pst.close();

            JOptionPane.showMessageDialog(null, " Data inserted successfully",
                    "System Message", JOptionPane.INFORMATION_MESSAGE);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void readData() {
        try {
            String url = "jdbc:mysql://localhost:3306/";

            String databaseName = "student";
            String userName = "root";
            String password = "root";

            Connection connection = DriverManager.getConnection(url + databaseName, userName, password);

            String query = "select * from " + databaseName + ";";

            Statement statement = connection.createStatement();
            ResultSet rs = statement.executeQuery(query);
            while (rs.next()) {
                System.out.println("id = " + rs.getInt(1));
                System.out.println("name = " + rs.getString(2));
                System.out.println("email = " + rs.getString(3));
            }
            statement.close();

            JOptionPane.showMessageDialog(null, " Printed successfully",
                    "System Message", JOptionPane.INFORMATION_MESSAGE);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void updateData() {
        try {
            String url = "jdbc:mysql://localhost:3306/";

            String databaseName = "student";
            String userName = "root";
            String password = "root";

            Connection connection = DriverManager.getConnection(url + databaseName, userName, password);

            String query = "update student set s_id = ? where s_name = ?;";

            PreparedStatement pst = connection.prepareStatement(query);
            pst.setInt(1, 4);
            pst.setString(2, "darshna");
            pst.execute();
            pst.close();

            JOptionPane.showMessageDialog(null, " Data updated successfully",
                    "System Message", JOptionPane.INFORMATION_MESSAGE);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void deleteData() {
        try {
            String url = "jdbc:mysql://localhost:3306/";

            String databaseName = "student";
            String userName = "root";
            String password = "root";

            Connection connection = DriverManager.getConnection(url + databaseName, userName, password);

            String query = "delete from student where s_id = ?;";

            PreparedStatement pst = connection.prepareStatement(query);
            pst.setInt(1, 4);
            pst.execute();
            pst.close();

            JOptionPane.showMessageDialog(null, " Data deleted successfully",
                    "System Message", JOptionPane.INFORMATION_MESSAGE);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
